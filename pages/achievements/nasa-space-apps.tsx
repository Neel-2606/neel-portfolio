// pages/achievements/nasa-space-apps.tsx
import Head from "next/head";
import styles from "@/styles/Sections.module.css";
import Link from "next/link";
      
      export default function NasaSpaceApps() {
        return (
          <>
            <Head>
              <title>NASA Space Apps — Mumbai Pulse | Neel</title>
              <meta name="description" content="NASA Space Apps Challenge project details: Mumbai Pulse" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
      
            <section className={styles.section}>
              <div className={styles.achievementHeader}>
                <h1 className={styles.title}>🌍 NASA Space Apps — Mumbai Pulse</h1>
                <div className={styles.achievementDate}>2025</div>
                <p className={styles.aboutContent}>
                  AI-powered platform using NASA Earth observation data to monitor air quality, heat, and 
                  water indicators for smarter, healthier cities. Real-time insights, risk alerts, and 
                  city health scoring for public and planners.
                </p>
              </div>
      
              <div className={styles.achievementBox}>
                <h2 className={styles.achievementTitle}>Project Overview</h2>
                <p className={styles.achievementContent}>
                  Comprehensive environmental monitoring solution that LEVERAGES NASA&apos;s satellite data to create 
                  actionable insights for urban planning and public health initiatives.
                </p>
              </div>
      
              <div className={styles.achievementBox}>
                <h2 className={styles.achievementTitle}>Key Features</h2>
                <ul className={styles.achievementList}>
                  <li>Real-time air quality monitoring and alerts</li>
                  <li>Heat island effect analysis and mapping</li>
                  <li>Water quality indicators and contamination detection</li>
                  <li>City health scoring algorithm</li>
                  <li>Predictive analytics for environmental risks</li>
                  <li>Interactive dashboard for urban planners</li>
                </ul>
              </div>
      
              <div className={styles.achievementBox}>
                <h2 className={styles.achievementTitle}>Technical Implementation</h2>
                <ul className={styles.achievementList}>
                  <li>NASA Earthdata API integration</li>
                  <li>Next.js frontend with interactive maps</li>
                  <li>AI/ML models for risk prediction</li>
                  <li>Real-time data processing pipeline</li>
                  <li>Responsive design for mobile and desktop</li>
                </ul>
              </div>
      
              <div className={styles.achievementBox}>
                <h2 className={styles.achievementTitle}>Impact & Results</h2>
                <ul className={styles.achievementList}>
                  <li>Enhanced decision-making for city planners</li>
                  <li>Public awareness about environmental health</li>
                  <li>Early warning system for pollution events</li>
                  <li>Data-driven policy recommendations</li>
                  <li>Scalable solution for multiple cities</li>
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
