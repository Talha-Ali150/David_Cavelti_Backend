import { sendEmail } from "../utils/sendEmail.js";

export const sendContactMessageService = async (contactData) => {
  const { fullName, email, phone, message } = contactData;

  if (!fullName || !email || !message || !phone) {
    throw new Error("All fields are required");
  }

  const html = `
    <h2>New Contact Message</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  await sendEmail({
    to: process.env.SMTP_USER,
    subject: `New message from ${fullName}`,
    html,
  });

  return { success: true, message: "Email sent successfully" };
};
