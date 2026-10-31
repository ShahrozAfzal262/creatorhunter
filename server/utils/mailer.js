import nodemailer from "nodemailer";

const transport = process.env.SMTP_HOST
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: +process.env.SMTP_PORT || 587,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  : nodemailer.createTransport({ jsonTransport: true });

export default async function sendMail({ to, subject, text }) {
  const info = await transport.sendMail({ from: process.env.MAIL_FROM || "you@yourapp.com", to, subject, text });
  if (!process.env.SMTP_HOST) console.log("DEV mail (not really sent):", info.message);
  return info;
}
