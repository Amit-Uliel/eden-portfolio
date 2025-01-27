'use client';

import { Container, Title, Text, Flex } from '@mantine/core';
import styles from './Experience.module.scss';
import { IoPin } from 'react-icons/io5';
import experiences from '@/data/experiences';
import { useMediaQuery } from '@mantine/hooks';

export default function Experience() {
    const isMobile768 = useMediaQuery('(max-width: 768px)');
    return (
        <Container className={styles.experience}>
            <Title order={2} align="center" mb="xl" c="gray.2">
                Experience
            </Title>
            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <Flex
                        key={index}
                        className={styles.timelineItem}
                        direction="column"
                        align={
                            isMobile768
                                ? 'center'
                                : index % 2 === 0
                                  ? 'flex-start'
                                  : 'flex-end'
                        }
                    >
                        <div className={styles.milestone} />
                        <div className={styles.content}>
                            <IoPin className={styles.pinIcon} />
                            <Text weight={600}>{exp.title}</Text>
                            <Text size="sm" c="dimmed">
                                {exp.company} | {exp.date}
                            </Text>
                            <Text size="sm" mt="xs" c="gray.4">
                                {exp.description}
                            </Text>
                        </div>
                    </Flex>
                ))}
            </div>
        </Container>
    );
}
