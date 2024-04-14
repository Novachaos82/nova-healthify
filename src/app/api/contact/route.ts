import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request: NextRequest) {
  const myEmail = process.env.PERSONAL_EMAIL;
  const password = process.env.EMAIL_PASSWORD;

  const formData = await request.formData();
  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: myEmail,
      pass: password,
    },
  });

  try {
    await transporter.verify();
    console.log("Connected to email server");
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE" },
      { status: 500 }
    );
  }

  try {
    const mail = await transporter.sendMail({
      from: myEmail,
      to: myEmail,
      replyTo: email,
      subject: `Nova-Healthify Contact Form Submission`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>phone: ${phone} </p>

        <p>Message: ${message} </p>
        `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
  }
}
