"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendAppointmentEmail(prevState, formData) {
  try {
    // Check if formData exists
    if (!formData) {
      return { success: false, error: "No form data received" }
    }

    const appointmentData = {
      appointmentType: formData.get("appointmentType"),
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      age: formData.get("age"),
      department: formData.get("department"),
      doctor: formData.get("doctor"),
      date: formData.get("date"),
      time: formData.get("time"),
      additionalInfo: formData.get("additionalInfo"),
    }

    // Validate required fields
    if (
      !appointmentData.fullName ||
      !appointmentData.phone ||
      !appointmentData.department ||
      !appointmentData.date ||
      !appointmentData.time
    ) {
      return { success: false, error: "Please fill in all required fields" }
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #017381; border-bottom: 2px solid #017381; padding-bottom: 10px;">
          New Appointment Booking
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #017381; margin-top: 0;">Patient Information</h3>
          <p><strong>Full Name:</strong> ${appointmentData.fullName}</p>
          <p><strong>Phone:</strong> ${appointmentData.phone}</p>
          <p><strong>Email:</strong> ${appointmentData.email || "Not provided"}</p>
          <p><strong>Age:</strong> ${appointmentData.age || "Not provided"}</p>
        </div>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #017381; margin-top: 0;">Appointment Details</h3>
          <p><strong>Type:</strong> ${appointmentData.appointmentType}</p>
          <p><strong>Department:</strong> ${appointmentData.department}</p>
          <p><strong>Preferred Doctor:</strong> ${appointmentData.doctor || "Any Available Doctor"}</p>
          <p><strong>Date:</strong> ${appointmentData.date}</p>
          <p><strong>Time:</strong> ${appointmentData.time}</p>
        </div>

        ${
          appointmentData.additionalInfo
            ? `
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #017381; margin-top: 0;">Additional Information</h3>
          <p>${appointmentData.additionalInfo}</p>
        </div>
        `
            : ""
        }

        <div style="margin-top: 30px; padding: 20px; background-color: #017381; color: white; border-radius: 8px; text-align: center;">
          <p style="margin: 0;">Please contact the patient to confirm the appointment.</p>
        </div>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: "Appointment System <appointments@pmchl.com>",
      to: ["info@pmchl.com"],
      subject: `New Appointment Request - ${appointmentData.fullName}`,
      html: emailHtml,
    })

    if (error) {
      console.error("Email sending error:", error)
      return {
        success: false,
        error: `Failed to send email: ${error.message || "Unknown error"}`,
      }
    }

    console.log("Email sent successfully:", data)
    return { success: true, message: "Appointment request sent successfully!" }
  } catch (error) {
    console.error("Server action error:", error)
    return { success: false, error: "Something went wrong. Please try again." }
  }
}
