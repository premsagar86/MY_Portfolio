import nodemailer from "nodemailer";

/** Gmail SMTP transporter. Requires SMTP_USER + SMTP_PASS (Google App Password). */
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
