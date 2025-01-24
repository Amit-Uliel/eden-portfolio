'use client';

import { useState } from 'react';
import {
    Button,
    Paper,
    Title,
    Text,
    Modal,
    Image,
    Divider,
    Flex,
} from '@mantine/core';
import styles from './Card.module.scss';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

export default function Card({
    images,
    title,
    shortDescription,
    description,
    softwares,
}) {
    const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);
    const isMobile768 = useMediaQuery('(max-width: 768px)');
    const isMobile700 = useMediaQuery('(max-width: 700px)');
    const isMobile430 = useMediaQuery('(max-width: 430px)');

    return (
        <>
            <Modal
                opened={slowTransitionOpened}
                onClose={() => setSlowTransitionOpened(false)}
                title={title}
                fullScreen
                overlayProps={{
                    color: '#000',
                    opacity: 0.5,
                    blur: 3,
                }}
                transitionProps={{ transition: 'rotate-left' }}
                centered
                classNames={{
                    body: styles.modalBody,
                    header: styles.modalHeader,
                    close: styles.modalClose,
                }}
            >
                <Carousel
                    withIndicators
                    mt={60}
                    height={isMobile768 ? 300 : 400}
                    loop
                    nextControlIcon={
                        <IconArrowRight size={16} style={{ color: '#fff' }} />
                    }
                    previousControlIcon={
                        <IconArrowLeft size={16} style={{ color: '#fff' }} />
                    }
                    nextControlProps={{
                        style: { backgroundColor: '#ffffff6a' },
                    }}
                    previousControlProps={{
                        style: { backgroundColor: '#ffffff6a' },
                    }}
                >
                    {images.map((image, index) => (
                        <Carousel.Slide key={index}>
                            <Image
                                src={image}
                                className={styles.modalImage}
                                alt={title}
                            />
                        </Carousel.Slide>
                    ))}
                </Carousel>
                <Flex className={styles.modalContent} mt="xl">
                    <Text
                        size={isMobile430 ? "sm" : "md"}
                        c="gray.5"
                        className={styles.modalDescription}
                    >
                        {description}
                    </Text>
                    <div className={styles.modalSoftwares}>
                        <Divider
                            orientation={
                                isMobile700 ? 'horizontal' : 'vertical'
                            }
                            h="100%"
                            w="50%"
                            mx="auto"
                            my="auto"
                        />
                        <Text size="md" c="dimmed" className={styles.softwares}>
                            {softwares.map((software, index) => (
                                <span key={index}>{software}</span>
                            ))}
                        </Text>
                    </div>
                </Flex>
            </Modal>

            <Paper
                shadow="md"
                p="xl"
                radius="md"
                style={{ backgroundImage: `url(${images[0]})` }}
                className={styles.card}
            >
                <div>
                    <Text className={styles.description} size="xs">
                        {shortDescription}
                    </Text>
                    <Title order={3} className={styles.title}>
                        {title}
                    </Title>
                </div>
                <Button
                    variant="white"
                    color="dark"
                    onClick={() => setSlowTransitionOpened(true)}
                >
                    Read About The Project
                </Button>
            </Paper>
        </>
    );
}
