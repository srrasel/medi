import { Resend } from "resend"
import { NextResponse } from "next/server"
import { safeText } from "@/lib/sanitize"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const resend = new Resend(RESEND_API_KEY)

const ALLOWED_CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
])
const MAX_CV_BYTES = 5 * 1024 * 1024

export async function POST(request) {
  try {
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured" },
        { status: 500 },
      )
    }

    const formData = await request.formData()

    const applicationData = {
      fullName: safeText(formData.get("fullName"), 120),
      email: safeText(formData.get("email"), 120),
      phone: safeText(formData.get("phone"), 40),
      position: safeText(formData.get("position"), 200),
      jobId: safeText(formData.get("jobId"), 40),
      coverLetter: safeText(formData.get("coverLetter"), 4000),
      experience: safeText(formData.get("experience"), 80),
    }

    const cvFile = formData.get("cv")

    if (!applicationData.fullName || !applicationData.email || !applicationData.phone) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields" },
        { status: 400 },
      )
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #017381; border-bottom: 2px solid #017381; padding-bottom: 10px;">
          New Job Application
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #017381; margin-top: 0;">Applicant Information</h3>
          <p><strong>Full Name:</strong> ${applicationData.fullName}</p>
          <p><strong>Email:</strong> ${applicationData.email}</p>
          <p><strong>Phone:</strong> ${applicationData.phone}</p>
          <p><strong>Experience:</strong> ${applicationData.experience || "Not provided"}</p>
        </div>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #017381; margin-top: 0;">Position Details</h3>
          <p><strong>Position:</strong> ${applicationData.position || "Not specified"}</p>
          <p><strong>Job ID:</strong> #${applicationData.jobId || "N/A"}</p>
        </div>

        ${
          applicationData.coverLetter
            ? `
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #017381; margin-top: 0;">Cover Letter</h3>
          <p style="white-space: pre-wrap;">${applicationData.coverLetter}</p>
        </div>
        `
            : ""
        }

        <div style="margin-top: 30px; padding: 20px; background-color: #017381; color: white; border-radius: 8px; text-align: center;">
          <p style="margin: 0;">This application was submitted through the Careers page.</p>
        </div>
      </div>
    `

    const emailPayload = {
      from: "Careers System <careers@pmchl.com>",
      to: ["hr@pmchl.com", "info@pmchl.com"],
      replyTo: applicationData.email,
      subject: `Job Application - ${applicationData.position || "Position"} - ${applicationData.fullName}`,
      html: emailHtml,
    }

    if (cvFile && typeof cvFile === "object" && cvFile.size > 0) {
      if (cvFile.size > MAX_CV_BYTES) {
        return NextResponse.json(
          { success: false, error: "CV file must be 5MB or smaller" },
          { status: 400 },
        )
      }

      if (cvFile.type && !ALLOWED_CV_TYPES.has(cvFile.type)) {
        return NextResponse.json(
          { success: false, error: "CV must be a PDF or Word document" },
          { status: 400 },
        )
      }

      const safeName = String(cvFile.name || "cv.pdf")
        .replace(/[^a-zA-Z0-9._-]/g, "_")
        .slice(0, 100)

      const buffer = Buffer.from(await cvFile.arrayBuffer())
      emailPayload.attachments = [
        {
          filename: safeName,
          content: buffer,
        },
      ]
    }

    const { data, error } = await resend.emails.send(emailPayload)

    if (error) {
      console.error("Email sending error:", error)
      return NextResponse.json(
        { success: false, error: "Failed to send application. Please try again." },
        { status: 500 },
      )
    }

    console.log("Job application sent successfully:", data)
    return NextResponse.json({
      success: true,
      message: "Your application has been submitted successfully! We will contact you soon.",
    })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}
