import { NextResponse } from "next/server"
import { Resend } from "resend"
export async function POST(req) {
  try {
    const { doctorName, name, email, phone, date, time, message } = await req.json()

    // In a real application, you would fetch doctor details from your database
    // using doctorId to include them in the email.
    // For now, we'll assume doctorName is passed or fetched.
    // You might also want to fetch the doctor's name from Strapi here if not passed.

    // Construct the email content
    const emailSubject = `New Appointment Request for Doctor ID: ${doctorName}`
    const emailBody = `
      New Appointment Request Details:

      Doctor Name: ${doctorName}
      Patient Name: ${name}
      Patient Email: ${email}
      Patient Phone: ${phone}
      Preferred Date: ${date}
      Preferred Time: ${time}
      Message: ${message || "N/A"}

      Please contact the patient to confirm the appointment.
    `

    // --- Email Sending Logic (Conceptual) ---
    // In a real application, you would use an email sending library/service here.
    // Example with a hypothetical email service:
const resend = new Resend(process.env.RESEND_API_KEY);
     await resend.emails.send({
       from: 'noreply@pmchl.com',
     to: 'info@pmchl.com', // Your target email address
    subject: emailSubject,
     html: `<p>${emailBody.replace(/\n/g, '<br/>')}</p>`,
     });

    // console.log("--- Simulating Email Send ---")
    // console.log("To: info@pmcml.com")
    // console.log("Subject:", emailSubject)
    // console.log("Body:\n", emailBody)
    // console.log("----------------------------")

    return NextResponse.json(
      { message: "Appointment request received and email simulated successfully!" },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing appointment request:", error)
    return NextResponse.json(
      { message: "Failed to process appointment request", error: error.message },
      { status: 500 },
    )
  }
}
