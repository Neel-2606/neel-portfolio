// pages/achievements/hack2skill.tsx
import Head from "next/head";
import styles from "@/styles/Sections.module.css";
import Link from "next/link";

export default function Hack2Skill() {
  return (
    <>
      <Head>
        <title>Hack2Skill — AI for Impact | Neel</title>
        <meta name="description" content="Hack2Skill AI for Impact project details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.section}>
        <div className={styles.achievementHeader}>
          <h1 className={styles.title}>🤖 Hack2Skill — AI for Impact</h1>
          <div className={styles.achievementDate}>2025</div>
          <p className={styles.aboutContent}>
            Rapid AI prototyping focused on measurable public-good outcomes, lean development 
            approaches, and deployable interfaces for real-world problem solving.
          </p>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Project Overview</h2>
          <p className={styles.achievementContent}>
            Participated in Google Cloud&apos;s Hack2Skill hackathon, developing AI-powered solutions 
            that address real-world challenges with practical, impactful implementations.
          </p>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Development Approach</h2>
          <ul className={styles.achievementList}>
            <li>Problem identification and scoping</li>
            <li>Rapid prototyping with modern frameworks</li>
            <li>AI model integration and testing</li>
            <li>User-centric interface design</li>
            <li>Performance optimization and scalability</li>
          </ul>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Key Achievements</h2>
          <ul className={styles.achievementList}>
            <li>Developed working AI prototypes</li>
            <li>Implemented practical solutions for real problems</li>
            <li>Collaborated with diverse team members</li>
            <li>Presented solutions to industry experts</li>
            <li>Gained experience in rapid development cycles</li>
          </ul>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Technologies Used</h2>
          <ul className={styles.achievementList}>
            <li>Next.js for rapid web development</li>
            <li>Google Cloud AI services</li>
            <li>React components and state management</li>
            <li>RESTful API integration</li>
            <li>Responsive design principles</li>
          </ul>
        </div>

        <div style={{ marginTop: '40px' }}>
          <Link href="/#achievements" className={styles.btn}>← Back to Achievements</Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Neel. All rights reserved.</p>
      </footer>
    </>
  );
}
