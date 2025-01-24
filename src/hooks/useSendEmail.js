import { useState } from 'react';
import { sendEmailAction } from '@/app/actions/sendEmailAction';

export function useSendEmail() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const sendEmail = async (formData) => {
        setIsLoading(true);
        setError('');
        setSuccess('');

        const senderName = formData.get('senderName');
        const senderEmail = formData.get('senderEmail');
        const subject = formData.get('subject');
        const message = formData.get('message');

        if (!senderName || !senderEmail || !subject || !message) {
            setError('All fields are required.');
            setIsLoading(false);
            return;
        }

        if (!/\S+@\S+\.\S+/.test(senderEmail)) {
            setError('Please enter a valid email address.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await sendEmailAction(formData);
            if (response.success) {
                setSuccess(response.message);
            } else {
                setError(response.message);
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return { sendEmail, isLoading, error, success };
}
