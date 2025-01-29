'use client';

import { motion } from 'motion/react';
import styles from './AnimatedSection.module.scss';

export default function AnimatedSection({ children, className }) {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className={className}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                transition={{ duration: 0.8 }}
            >
                {children}
            </motion.div>
        </section>
    );
}
