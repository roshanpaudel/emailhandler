import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

//create email processor- send out the email
const emailProcessor = async (templateObj) => {
  const info = await transporter.sendMail(templateObj);
  console.log(info.messageId);
};

//function to create email templates

export const userUpdateTemplate = () => {
  const obj = {
    from: `"Roshan" <${process.env.SMTP_USER}>`, // sender address
    to: `${process.env.SMTP_USER}`, // list of recipients
    subject: "email testing", // subject line
    text: "This is the test email. Please ignore.", // plain text body
    html: "<b>Hello world?</b>", // HTML body
  };
  console.log(process.env.SMTP_USER);
  emailProcessor(obj);
};
