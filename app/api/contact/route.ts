import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/sendEmail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    await sendEmail({
      to: "21ucs511vignesh@gmail.com",
      subject: `Project Alert from ${name} - ${subject}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to send email - ", err },
      { status: 500 },
    );
  }
}
