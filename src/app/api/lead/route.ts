import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Extract data from the form
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone"); // Might be empty if not in form
    const pickup = formData.get("pickup"); // User typed "Travel Dates" here
    const destination = formData.get("destination"); // User typed "Number of Persons" here
    const notes = formData.get("notes");

    // Configure the email transporter using Vercel Environment Variables
    // This keeps your email address hidden from the client code.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // True for port 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your Gmail (singakkuliya2@gmail.com)
        pass: process.env.SMTP_PASS, // Your App Password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Website Lead" <${process.env.SMTP_FROM}>`, 
      to: process.env.LEADS_TO_EMAIL, // This sends to singakkuliya2@gmail.com (set in Vercel)
      subject: `New Inquiry from ${name} – Sri Lanka Transfers`,
      text: `
--------------------------------------------------
NEW WEBSITE INQUIRY
--------------------------------------------------

CONTACT DETAILS:
Name:  ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

TRIP DETAILS:
Travel Dates:      ${pickup}        
Number of Persons: ${destination}   

ADDITIONAL NOTES:
${notes || "None provided"}

--------------------------------------------------
Sent from srilankaairporttransfer.com
      `,
    });

    // Success: Redirect to Thank You page
    return NextResponse.redirect(
      new URL("/thank-you/", req.url),
      303
    );

  } catch (error) {
    console.error("Lead submission error:", error);

    // Error: Redirect back to Contact page with error flag
    return NextResponse.redirect(
      new URL("/contact/?error=1", req.url),
      303
    );
  }
}