// pages/achievements/hackout-daiict.tsx
import Head from "next/head";
import styles from "@/styles/Sections.module.css";
import Link from "next/link";

export default function HackoutDAIICT() {
  return (
    <>
      <Head>
        <title>HackOut (DA-IICT) — Coastal Threat Alert | Neel</title>
        <meta name="description" content="HackOut DA-IICT coastal threat alert system details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.section}>
        <div className={styles.achievementHeader}>
          <h1 className={styles.title}>🌊 HackOut (DA-IICT) — Coastal Threat Alert</h1>
          <div className={styles.achievementDate}>2025</div>
          <p className={styles.aboutContent}>
            Prototype fusing coastal sensor feeds and satellite indicators to detect flooding/erosion 
            risks and trigger automated alerts for local authorities.
          </p>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Project Overview</h2>
          <p className={styles.achievementContent}>
            Developed an intelligent coastal monitoring system that combines multiple data sources 
            to provide early warning for environmental hazards and support emergency response.
          </p>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>System Architecture</h2>
          <ul className={styles.achievementList}>
            <li>Multi-sensor data fusion and processing</li>
            <li>Satellite imagery analysis and integration</li>
            <li>Real-time risk assessment algorithms</li>
            <li>Automated alert generation and routing</li>
            <li>Geographic information system integration</li>
          </ul>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Key Features</h2>
          <ul className={styles.achievementList}>
            <li>Coastal erosion monitoring and prediction</li>
            <li>Flood risk assessment and early warning</li>
            <li>Multi-source data integration platform</li>
            <li>Automated alert system for authorities</li>
            <li>Interactive risk visualization maps</li>
          </ul>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Technical Implementation</h2>
          <ul className={styles.achievementList}>
            <li>Sensor data acquisition and preprocessing</li>
            <li>Satellite data processing and analysis</li>
            <li>Machine learning for threat detection</li>
            <li>Real-time data streaming and processing</li>
            <li>Web-based dashboard for monitoring</li>
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
