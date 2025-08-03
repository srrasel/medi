import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const appointmentData = await request.json()

    const appointmentTypeLabels = {
      consultation: "General Consultation",
      emergency: "Emergency Visit",
      followup: "Follow-up",
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Appointment Request</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #017381, #025a65); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #017381; }
            .value { margin-left: 10px; }
            .urgent { background: #fee2e2; border-left: 4px solid #dc2626; padding: 15px; margin: 20px 0; border-radius: 5px; }
            .footer { text-align: center; margin-top: 30px; padding: 20px; background: #f3f4f6; border-radius: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏥 New Appointment Request</h1>
              <p>A new patient has requested an appointment</p>
            </div>
            
            <div class="content">
              ${
                appointmentData.appointmentType === "emergency"
                  ? `
                <div class="urgent">
                  <strong>⚠️ EMERGENCY APPOINTMENT REQUEST</strong>
                  <p>This patient has requested an emergency visit. Please prioritize this request.</p>
                </div>
              `
                  : ""
              }
              
              <h2>Patient Information</h2>
              <div class="field">
                <span class="label">Full Name:</span>
                <span class="value">${appointmentData.fullName}</span>
              </div>
              <div class="field">
                <span class="label">Phone Number:</span>
                <span class="value">${appointmentData.phone}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${appointmentData.email || "Not provided"}</span>
              </div>
              <div class="field">
                <span class="label">Age:</span>
                <span class="value">${appointmentData.age || "Not provided"}</span>
              </div>
              
              <h2>Appointment Details</h2>
              <div class="field">
                <span class="label">Appointment Type:</span>
                <span class="value">${appointmentTypeLabels[appointmentData.appointmentType as keyof typeof appointmentTypeLabels]}</span>
              </div>
              <div class="field">
                <span class="label">Department:</span>
                <span class="value">${appointmentData.department}</span>
              </div>
              <div class="field">
                <span class="label">Preferred Doctor:</span>
                <span class="value">${appointmentData.doctor}</span>
              </div>
              <div class="field">
                <span class="label">Preferred Date:</span>
                <span class="value">${new Date(appointmentData.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}</span>
              </div>
              <div class="field">
                <span class="label">Preferred Time:</span>
                <span class="value">${appointmentData.time}</span>
              </div>
              
              ${
                appointmentData.additionalInfo
                  ? `
                <h2>Additional Information</h2>
                <div class="field">
                  <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #017381;">
                    ${appointmentData.additionalInfo}
                  </p>
                </div>
              `
                  : ""
              }
              
              <div class="footer">
                <p><strong>Submitted:</strong> ${new Date(appointmentData.submittedAt).toLocaleString()}</p>
                <p style="color: #666; font-size: 14px;">
                  Please contact the patient to confirm the appointment details.
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    const { data, error } = await resend.emails.send({
      from: "Appointment System <appointments@pmchl.com>",
      to: ["info@pmchl.com"],
      subject: `${appointmentData.appointmentType === "emergency" ? "🚨 URGENT - " : ""}New Appointment Request - ${appointmentData.fullName}`,
      html: emailHtml,
      replyTo: appointmentData.email || undefined,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
