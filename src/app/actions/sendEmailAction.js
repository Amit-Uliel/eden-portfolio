'use server';

import { sendMail } from '../../../lib/mail';

export async function sendEmailAction(formData) {
    try {
        const senderName = formData.get('senderName');
        const senderEmail = formData.get('senderEmail');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Send the email
        await sendMail({ senderName, senderEmail, subject, message });

        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Failed to send message.' };
    }
}
