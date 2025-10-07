// pages/achievements/google-cloud-diamond-league.tsx
import Head from "next/head";
import styles from "@/styles/Sections.module.css";
import Link from "next/link";

export default function GoogleCloudDiamondLeague() {
  return (
    <>
      <Head>
        <title>Google Cloud & Diamond League | Neel</title>
        <meta name="description" content="Google Cloud Career Launchpad & Diamond League details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.section}>
        <div className={styles.achievementHeader}>
          <h1 className={styles.title}>🏅 Google Cloud & Diamond League</h1>
          <div className={styles.achievementDate}>October 2025</div>
          <p className={styles.aboutContent}>
            Completed Generative AI track under Google Cloud Career Launchpad Program and
            participated in the Diamond League for continued skill growth.
          </p>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Program Overview</h2>
          <p className={styles.achievementContent}>
            A comprehensive program focused on Generative AI and cloud technologies, combining theoretical knowledge with practical implementation.
          </p>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Focus Areas</h2>
          <ul className={styles.achievementList}>
            <li>Generative AI concepts and fundamentals</li>
            <li>Hands-on labs with Google Cloud Platform</li>
            <li>Cloud-native tooling and services implementation</li>
            <li>Best practices in AI/ML deployment</li>
            <li>Integration of AI services in cloud applications</li>
          </ul>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Key Achievements</h2>
          <ul className={styles.achievementList}>
            <li>Successfully completed all program modules</li>
            <li>Developed practical projects implementing Gen AI</li>
            <li>Earned certificates for completed tracks</li>
            <li>Applied learnings in personal projects</li>
            <li>Participated in Diamond League challenges</li>
          </ul>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Skills Acquired</h2>
          <ul className={styles.achievementList}>
            <li>Generative AI Development</li>
            <li>Google Cloud Platform Services</li>
            <li>Cloud Architecture Design</li>
            <li>AI Model Deployment</li>
            <li>Cloud-Native Development</li>
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
