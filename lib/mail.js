import nodemailer from 'nodemailer';

// Function to send an email using nodemailer
export async function sendMail({ senderName, senderEmail, subject, message }) {
    // Destructure email credentials from environment variables
    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    // Create a transport object using nodemailer and Gmail service
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD,
        },
    });

    // Send an email using the transport object
    await transport.sendMail({
        from: `"${senderName}" <${SMTP_EMAIL}>`,
        to: SMTP_EMAIL,
        subject,
        text: message,
        replyTo: senderEmail,
    });
}
