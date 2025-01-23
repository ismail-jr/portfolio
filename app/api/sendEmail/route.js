import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "All fields are required." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.TO_EMAIL,
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send message." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
