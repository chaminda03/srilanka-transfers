import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const pickup = formData.get("pickup");
    const destination = formData.get("destination");
    const date = formData.get("date");
    const notes = formData.get("notes");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Sri Lanka Transfers" <${process.env.SMTP_FROM}>`,
      to: process.env.LEADS_TO_EMAIL,
      subject: "New Website Inquiry – Sri Lanka Transfers",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}

Pickup: ${pickup}
Destination: ${destination}
Date & Time: ${date}

Notes:
${notes || "None"}
      `,
    });

    // ✅ THIS LINE IS WHAT CHANGES THE PAGE
    return NextResponse.redirect(
      new URL("/thank-you/", req.url),
      303
    );
  } catch (error) {
    console.error("Lead error:", error);

    return NextResponse.redirect(
      new URL("/contact/?error=1", req.url),
      303
    );
  }
}
