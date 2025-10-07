// pages/achievements/isro-spacetech.tsx
import Head from "next/head";
import styles from "@/styles/Sections.module.css";
import Link from "next/link";

export default function IsroSpacetech() {
  return (
    <>
      <Head>
        <title>ISRO SpaceTech Innovation Hackathon | Neel</title>
        <meta name="description" content="ISRO SpaceTech Innovation Hackathon project details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.section}>
        <div className={styles.achievementHeader}>
          <h1 className={styles.title}>🚀 ISRO SpaceTech Innovation Hackathon</h1>
          <div className={styles.achievementDate}>2025</div>
          <p className={styles.aboutContent}>
            Geospatial and satellite-driven solutions for national-level SpaceTech challenges, 
            fusing remote sensing with analytics to produce actionable dashboards and risk indicators.
          </p>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Project Overview</h2>
          <p className={styles.achievementContent}>
            Participated in India&apos;s premier SpaceTech hackathon organized by ISRO, developing 
            innovative solutions using satellite data and geospatial technologies.
          </p>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Technical Focus</h2>
          <ul className={styles.achievementList}>
            <li>Satellite imagery processing and analysis</li>
            <li>Remote sensing data integration</li>
            <li>Geospatial visualization and mapping</li>
            <li>Risk assessment algorithms</li>
            <li>Real-time monitoring systems</li>
          </ul>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Key Achievements</h2>
          <ul className={styles.achievementList}>
            <li>Developed prototype geospatial solutions</li>
            <li>Integrated multiple satellite data sources</li>
            <li>Created interactive risk assessment tools</li>
            <li>Presented among top tech talent nationwide</li>
            <li>Gained expertise in space technology applications</li>
          </ul>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Technologies Used</h2>
          <ul className={styles.achievementList}>
            <li>Sentinel and Landsat satellite data</li>
            <li>Geospatial analysis tools</li>
            <li>Python for data processing</li>
            <li>Interactive web dashboards</li>
            <li>Real-time data visualization</li>
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
