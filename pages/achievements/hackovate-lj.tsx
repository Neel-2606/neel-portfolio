// pages/achievements/hackovate-lj.tsx
import Head from "next/head";
import styles from "@/styles/Sections.module.css";
import Link from "next/link";

export default function HackovateLJ() {
  return (
    <>
      <Head>
        <title>Hackovate LJ — Finalist | Neel</title>
        <meta name="description" content="Hackovate LJ finalist project details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.section}>
        <div className={styles.achievementHeader}>
          <h1 className={styles.title}>🏆 Hackovate LJ — Finalist</h1>
          <div className={styles.achievementDate}>2025</div>
          <p className={styles.aboutContent}>
            ML pipeline to predict cattle milk yield and flag health/anomaly risks using 
            sensor and historical data. Includes alerting dashboard for farmers.
          </p>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Project Overview</h2>
          <p className={styles.achievementContent}>
            Developed an intelligent farming solution that LEVERAGES machine learning to optimize 
            livestock management and improve agricultural outcomes.
          </p>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Technical Implementation</h2>
          <ul className={styles.achievementList}>
            <li>Sensor data collection and preprocessing</li>
            <li>Feature engineering from livestock metrics</li>
            <li>Machine learning model development and training</li>
            <li>Predictive analytics for milk yield forecasting</li>
            <li>Anomaly detection algorithms</li>
            <li>Real-time monitoring dashboard</li>
          </ul>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Key Features</h2>
          <ul className={styles.achievementList}>
            <li>Predictive milk yield forecasting</li>
            <li>Health risk identification and alerts</li>
            <li>Historical data analysis and trends</li>
            <li>Farmer-friendly dashboard interface</li>
            <li>Automated alert system for anomalies</li>
          </ul>
        </div>

        <div className={styles.achievementBox}>
          <h2 className={styles.achievementTitle}>Impact & Results</h2>
          <ul className={styles.achievementList}>
            <li>Improved livestock health monitoring</li>
            <li>Optimized resource allocation for farmers</li>
            <li>Reduced operational costs through early detection</li>
            <li>Enhanced decision-making capabilities</li>
            <li>Achieved finalist position in 36-hour hackathon</li>
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
