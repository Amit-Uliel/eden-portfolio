'use client';

import { Container, Title, Text } from '@mantine/core';
import styles from './About.module.scss';
import { useMediaQuery } from '@mantine/hooks';

export default function About() {
    const isMobile430 = useMediaQuery('(max-width: 430px)');
    return (
        <Container className={styles.about}>
            <Title order={2} align="center" c="gray.2">
                About Me
            </Title>
            <Text size={isMobile430 ? 'md' : 'xl'} c="gray.5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis quis eaque deleniti atque ducimus possimus id vero
                omnis illo. Officiis expedita ea qui. Quas incidunt optio, cum
                ipsum animi sed. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Eveniet iste architecto a doloribus velit odit
                aperiam ex molestiae obcaecati sequi, fugit recusandae sed qui
                commodi voluptatem? Eligendi, esse? Porro, earum.
            </Text>
        </Container>
    );
}
