"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendCallbackRequest(prevState, formData) {
  try {
    // Check if formData exists
    if (!formData) {
      return { success: false, error: "No form data received" }
    }

    const callbackData = {
      name: formData.get("name"),
      mobile: formData.get("mobile"),
      submittedAt: new Date().toISOString(),
    }

    // Validate required fields
    if (!callbackData.name || !callbackData.mobile) {
      return { success: false, error: "Please fill in all required fields" }
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #017381; border-bottom: 2px solid #017381; padding-bottom: 10px;">
          New Callback Request
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #017381; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${callbackData.name}</p>
          <p><strong>Mobile Number:</strong> ${callbackData.mobile}</p>
          <p><strong>Submitted:</strong> ${new Date(callbackData.submittedAt).toLocaleString()}</p>
        </div>

        <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 5px;">
          <p style="margin: 0; color: #856404;">
            <strong>Action Required:</strong> Please contact this person as soon as possible to provide the requested callback.
          </p>
        </div>

        <div style="margin-top: 30px; padding: 20px; background-color: #017381; color: white; border-radius: 8px; text-align: center;">
          <p style="margin: 0;">This callback request was submitted through the Corporate Clients page.</p>
        </div>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: "Callback System <callbacks@pmchl.com>",
      to: ["info@pmchl.com"],
      subject: `New Callback Request - ${callbackData.name}`,
      html: emailHtml,
    })

    if (error) {
      console.error("Email sending error:", error)
      return {
        success: false,
        error: `Failed to send callback request: ${error.message || "Unknown error"}`,
      }
    }

    console.log("Callback request sent successfully:", data)
    return { success: true, message: "Callback request submitted successfully! We will contact you soon." }
  } catch (error) {
    console.error("Server action error:", error)
    return { success: false, error: "Something went wrong. Please try again." }
  }
}
