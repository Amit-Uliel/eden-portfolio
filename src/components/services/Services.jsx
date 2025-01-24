'use client';

import { Container, Grid, Card, Text, Title } from '@mantine/core';
import services from '@/data/services';
import styles from './Services.module.scss';
import { useMediaQuery } from '@mantine/hooks';

export default function Services() {
    const isMobile430 = useMediaQuery('(max-width: 430px)');

    return (
        <Container className={styles.services}>
            <Title order={2} align="center" c="gray.2">
                How I Can Help
            </Title>
            <Grid>
                {services.map((service, index) => (
                    <Grid.Col key={index} span={isMobile430 ? 12 : 4}>
                        <Card shadow="md" className={styles.card}>
                            <service.icon
                                size={50}
                                className={styles.icon}
                                color={service.color}
                            />
                            <Title c="gray.4" order={3} mb="2px" mt="md">
                                {service.title}
                            </Title>
                            <Text c="gray.5" mt="sm">
                                {service.description}
                            </Text>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
}
