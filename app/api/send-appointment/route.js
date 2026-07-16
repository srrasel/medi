import { Resend } from "resend"
import { NextResponse } from "next/server"
import { safeText } from "@/lib/sanitize"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const resend = new Resend(RESEND_API_KEY)

export async function POST(request) {
  try {
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured" },
        { status: 500 },
      )
    }

    const formData = await request.formData()

    const appointmentData = {
      appointmentType: safeText(formData.get("appointmentType"), 100),
      fullName: safeText(formData.get("fullName"), 120),
      phone: safeText(formData.get("phone"), 40),
      email: safeText(formData.get("email"), 120),
      age: safeText(formData.get("age"), 10),
      date: safeText(formData.get("date"), 40),
      time: safeText(formData.get("time"), 40),
      additionalInfo: safeText(formData.get("additionalInfo"), 2000),
    }

    if (
      !appointmentData.fullName ||
      !appointmentData.phone ||
      !appointmentData.date ||
      !appointmentData.time
    ) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields" },
        { status: 400 },
      )
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
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please try again." },
        { status: 500 },
      )
    }

    console.log("Email sent successfully:", data)
    return NextResponse.json({ success: true, message: "Appointment request sent successfully!" })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}
