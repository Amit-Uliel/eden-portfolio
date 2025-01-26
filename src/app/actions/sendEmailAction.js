'use server';

import { sendMail } from '../../../lib/mail';

export async function sendEmailAction({ senderName, senderEmail, subject, message }) {
    // Send the email
    await sendMail({ senderName, senderEmail, subject, message });

    return { message: 'Message sent successfully!' };
}