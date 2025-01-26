import styles from './page.module.scss';
import Hero from '../components/hero/Hero';
import ProjectsShowcase from '../components/projectsShowcase/ProjectsShowcase';
import About from '../components/about/About';
import SkillsAndExpertise from '@/components/skillsAndExpertise/SkillsAndExpertise';
import Services from '@/components/services/Services';
import Contact from '@/components/contact/Contact';
import { Divider } from '@mantine/core';
import Experience from '@/components/experience/Experience';

export default function Home() {
    return (
        <>
            <section className={styles.section}>
                <Hero />
            </section>
            <section className={styles.section}>
                <ProjectsShowcase />
            </section>
            <section className={styles.section}>
                <About />
            </section>
            <section className={styles.section}>
                <Experience />
            </section>
            <section className={styles.section}>
                <SkillsAndExpertise />
            </section>
            <section className={styles.section}>
                <Services />
            </section>
            <Divider className={styles.divider} mx="auto" w="50%" />
            <section className={styles.section}>
                <Contact />
            </section>
        </>
    );
}
