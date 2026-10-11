import { transporter } from "./transporter";

interface SendEmailProps {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async ({ to, subject, html }: SendEmailProps) => {
  try {
    await transporter.sendMail({
      from: `"strap world " <${process.env.MAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.log("EMAIL ERROR:", error);
  }
};
