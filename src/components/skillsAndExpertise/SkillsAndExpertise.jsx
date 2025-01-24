'use client';

import { Container, Title, Text, Grid, Card } from '@mantine/core';
import skills from '@/data/skills';
import { useMediaQuery } from '@mantine/hooks';
import styles from './SkillsAndExpertise.module.scss';

export default function SkillsAndExpertise() {
    const isMobile430 = useMediaQuery('(max-width: 430px)');
    const isMobile320 = useMediaQuery('(max-width: 320px)');

    return (
        <Container className={styles.skillsAndExpertise}>
            <Title order={2} align="center" c="gray.2">
                Skills & Expertise
            </Title>
            <Grid grow>
                {skills.map((skill, index) => (
                    <Grid.Col key={index} span={isMobile430 ? 6 : 4}>
                        <Card className={styles.card}>
                            <skill.icon size={40} className={styles.icon} />
                            <Text
                                mt="xs"
                                size={
                                    isMobile320
                                        ? '0.625rem'
                                        : isMobile430
                                          ? 'xs'
                                          : 'md'
                                }
                                c="gray.5"
                            >
                                {skill.skillName}
                            </Text>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
}
