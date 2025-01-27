import styles from './page.module.scss';
import Hero from '../components/hero/Hero';
import ProjectsShowcase from '../components/projectsShowcase/ProjectsShowcase';
import About from '../components/about/About';
import SkillsAndExpertise from '@/components/skillsAndExpertise/SkillsAndExpertise';
import Services from '@/components/services/Services';
import Contact from '@/components/contact/Contact';
import { Divider } from '@mantine/core';
import Experience from '@/components/experience/Experience';
import AnimatedSection from '@/components/animatedSection/AnimatedSection';

export default function Home() {
    return (
        <>
            <AnimatedSection className={styles.section}>
                <Hero />
            </AnimatedSection>
            <AnimatedSection className={styles.section}>
                <ProjectsShowcase />
            </AnimatedSection>
            <AnimatedSection className={styles.section}>
                <About />
            </AnimatedSection>
            <AnimatedSection className={styles.section}>
                <Experience />
            </AnimatedSection>
            <AnimatedSection className={styles.section}>
                <SkillsAndExpertise />
            </AnimatedSection>
            <AnimatedSection className={styles.section}>
                <Services />
            </AnimatedSection>
            <Divider className={styles.divider} mx="auto" w="50%" />
            <AnimatedSection className={styles.section}>
                <Contact />
            </AnimatedSection>
        </>
    );
}
