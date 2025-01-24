import nodemailer from "nodemailer";

export async function sendMail({ senderEmail, senderName, subject, message }) {
    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD,
        },
    });

    try {
        const testResult = await transport.verify();
        console.log(testResult);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to verify email service.");
    }

    try {
        const sendResult = await transport.sendMail({
            from: `"${senderName}" <${SMTP_EMAIL}>`,
            to: SMTP_EMAIL,
            subject,
            text: message,
            replyTo: senderEmail,
        })
        console.log(sendResult);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send email.");
    }
}