'use client';

import projects from '@/data/projects';
import { Carousel } from '@mantine/carousel';
import { Title, Container } from '@mantine/core';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import Card from '../card/Card';
import styles from './ProjectsShowcase.module.scss';

export default function ProjectsShowcase() {
    const slides = projects.map((project) => (
        <Carousel.Slide key={project.title}>
            <Card {...project} />
        </Carousel.Slide>
    ));

    return (
        <Container className={styles.projectShowcase}>
            <Title order={2} align="center" c="gray.2">
                Projects
            </Title>
            <Carousel
                withIndicators
                slideSize={{ base: '100%', sm: '50%' }}
                slideGap="sm"
                align="start"
                loop
                nextControlIcon={
                    <IconArrowRight size={16} style={{ color: '#fff' }} />
                }
                previousControlIcon={
                    <IconArrowLeft size={16} style={{ color: '#fff' }} />
                }
                nextControlProps={{ style: { backgroundColor: '#ffffff6a' } }}
                previousControlProps={{
                    style: { backgroundColor: '#ffffff6a' },
                }}
            >
                {slides}
            </Carousel>
        </Container>
    );
}
