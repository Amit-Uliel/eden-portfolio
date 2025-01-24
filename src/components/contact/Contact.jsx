'use client';

import {
    Container,
    Title,
    TextInput,
    Textarea,
    Button,
    Flex,
    Text,
} from '@mantine/core';
import styles from './Contact.module.scss';
import { sendEmailAction } from '@/app/actions/sendEmailAction';

export default function Contact() {
    return (
        <Container className={styles.contact}>
            <Title order={2} align="center" c="gray.2">
                Let's Get In Touch
            </Title>
            <form className={styles.contactForm} action={sendEmailAction}>
                <TextInput
                    placeholder="Your Name"
                    name="senderName"
                    label="Name"
                    withAsterisk
                    className={styles.inputField}
                />
                <TextInput
                    placeholder="Your Email"
                    name="senderEmail"
                    label="Email"
                    withAsterisk
                    className={styles.inputField}
                />
                <TextInput
                    placeholder="Subject"
                    name="subject"
                    label="Subject"
                    withAsterisk
                    className={styles.inputField}
                />
                <Textarea
                    placeholder="Your Message"
                    name="message"
                    label="Message"
                    autosize
                    minRows={4}
                    withAsterisk
                    className={styles.textArea}
                />
                <Button
                    type="submit"
                    variant="gradient"
                    gradient={{ from: 'pink', to: 'cyan' }}
                    mt="md"
                >
                    Send Message
                </Button>
            </form>
            <Flex className={styles.social} justify="center" mt="lg">
                <Text c="dimmed">Or reach out on my social platforms:</Text>
                <Flex className={styles.socialLinks} gap="sm">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </Flex>
            </Flex>
        </Container>
    );
}
