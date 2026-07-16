import { Resend } from "resend"
import { NextResponse } from "next/server"
import { escapeHtml } from "@/lib/sanitize"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const resend = new Resend(RESEND_API_KEY)

const ALLOWED_CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/octet-stream",
])
const MAX_CV_BYTES = 5 * 1024 * 1024

function cleanText(value, maxLength = 2000) {
  if (value === null || value === undefined) return ""
  return String(value).trim().slice(0, maxLength)
}

export async function POST(request) {
  try {
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured" },
        { status: 500 },
      )
    }

    const formData = await request.formData()

    // Keep raw values for email headers; escape only when building HTML
    const raw = {
      fullName: cleanText(formData.get("fullName"), 120),
      email: cleanText(formData.get("email"), 120),
      phone: cleanText(formData.get("phone"), 40),
      position: cleanText(formData.get("position"), 200),
      jobId: cleanText(formData.get("jobId"), 40),
      coverLetter: cleanText(formData.get("coverLetter"), 4000),
      experience: cleanText(formData.get("experience"), 80),
    }

    const cvFile = formData.get("cv")

    if (!raw.fullName || !raw.email || !raw.phone) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields" },
        { status: 400 },
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address" },
        { status: 400 },
      )
    }

    const safe = {
      fullName: escapeHtml(raw.fullName),
      email: escapeHtml(raw.email),
      phone: escapeHtml(raw.phone),
      position: escapeHtml(raw.position),
      jobId: escapeHtml(raw.jobId),
      coverLetter: escapeHtml(raw.coverLetter),
      experience: escapeHtml(raw.experience),
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #017381; border-bottom: 2px solid #017381; padding-bottom: 10px;">
          New Job Application
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #017381; margin-top: 0;">Applicant Information</h3>
          <p><strong>Full Name:</strong> ${safe.fullName}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Phone:</strong> ${safe.phone}</p>
          <p><strong>Experience:</strong> ${safe.experience || "Not provided"}</p>
        </div>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #017381; margin-top: 0;">Position Details</h3>
          <p><strong>Position:</strong> ${safe.position || "Not specified"}</p>
          <p><strong>Job ID:</strong> #${safe.jobId || "N/A"}</p>
        </div>

        ${
          safe.coverLetter
            ? `
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #017381; margin-top: 0;">Cover Letter</h3>
          <p style="white-space: pre-wrap;">${safe.coverLetter}</p>
        </div>
        `
            : ""
        }

        <div style="margin-top: 30px; padding: 20px; background-color: #017381; color: white; border-radius: 8px; text-align: center;">
          <p style="margin: 0;">This application was submitted through the Careers page.</p>
        </div>
      </div>
    `

    // Use info@ as From (same verified domain sender as other forms). Deliver to HR inbox.
    const emailPayload = {
      from: "Pro-Active Careers <info@pmchl.com>",
      to: ["hr@pmchl.com"],
      replyTo: raw.email,
      subject: `Job Application - ${raw.position || "Position"} - ${raw.fullName}`,
      html: emailHtml,
    }

    if (cvFile && typeof cvFile === "object" && typeof cvFile.size === "number" && cvFile.size > 0) {
      if (cvFile.size > MAX_CV_BYTES) {
        return NextResponse.json(
          { success: false, error: "CV file must be 5MB or smaller" },
          { status: 400 },
        )
      }

      const fileName = String(cvFile.name || "cv.pdf")
      const lowerName = fileName.toLowerCase()
      const hasAllowedExt =
        lowerName.endsWith(".pdf") || lowerName.endsWith(".doc") || lowerName.endsWith(".docx")

      if (cvFile.type && !ALLOWED_CV_TYPES.has(cvFile.type) && !hasAllowedExt) {
        return NextResponse.json(
          { success: false, error: "CV must be a PDF or Word document" },
          { status: 400 },
        )
      }

      const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 100)
      const buffer = Buffer.from(await cvFile.arrayBuffer())

      emailPayload.attachments = [
        {
          filename: safeName || "cv.pdf",
          content: buffer,
        },
      ]
    }

    const { data, error } = await resend.emails.send(emailPayload)

    if (error) {
      console.error("Email sending error:", error)
      const detail = error.message || error.name || "Unknown email error"
      return NextResponse.json(
        {
          success: false,
          error: `Failed to send application: ${detail}`,
        },
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
      {
        success: false,
        error: error?.message
          ? `Something went wrong: ${error.message}`
          : "Something went wrong. Please try again.",
      },
      { status: 500 },
    )
  }
}
