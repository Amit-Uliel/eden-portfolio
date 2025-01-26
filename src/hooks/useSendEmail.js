import { useState } from 'react';
import { sendEmailAction } from '@/app/actions/sendEmailAction';

// Custom hook to handle sending emails and managing its state
export function useSendEmail() {
    // State variables to manage loading, errors, and success messages
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Function to handle sending email
    const sendEmail = async (formData) => {
        setIsLoading(true);
        setError('');
        setSuccess('');

        // Extract values from the form data
        const senderName = formData.get('senderName');
        const senderEmail = formData.get('senderEmail');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Validate input fields
        if (!senderName || !senderEmail || !subject || !message) {
            setError('All fields are required.');
            setIsLoading(false);
            return;
        }

        // Validate email format
        if (!/\S+@\S+\.\S+/.test(senderEmail)) {
            setError('Please enter a valid email address.');
            setIsLoading(false);
            return;
        }

        // Try to send the email
        try {
            const response = await sendEmailAction({
                senderName,
                senderEmail,
                subject,
                message,
            });
            setSuccess(response.message);
        } catch {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // Return the state and the email sending function for use in components
    return { sendEmail, isLoading, error, success };
}
