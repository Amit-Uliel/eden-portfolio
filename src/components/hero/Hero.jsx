import { Text, Container, Title, Flex, Divider } from '@mantine/core';
import { IconBulb } from '@tabler/icons-react';
import { PiTreeLight } from 'react-icons/pi';
import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <Container className={styles.hero} fluid>
            <Flex className={styles.upperFlexContainer}>
                <Title className={styles.nameTitle} order={2} c="gray.2">
                    Hi, I’m Eden,
                </Title>
                <Title className={styles.mainTitle} order={1} c="gray.2">
                    I’m an aspiring <strong>architect</strong>,&nbsp;
                    <Text
                        span
                        inherit
                        variant="gradient"
                        gradient={{ from: 'pink', to: 'cyan' }}
                        className={styles.gradientText}
                    >
                        <strong>crafting designs</strong>{' '}
                        <IconBulb className={styles.iconBulb} />
                    </Text>
                    &nbsp;for a better tomorrow.
                </Title>
                <Divider my="lg" color="gray.5" w="50%" mx="auto" />
            </Flex>
            <Title order={5} className={styles.titleEndText} c="gray.4">
                Explore my projects to see how I bring ideas to life
                <PiTreeLight className={styles.treeIcon} size={25} />.
            </Title>
        </Container>
    );
}
