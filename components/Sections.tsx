import styles from "@/styles/Sections.module.css";
import { FaGithub as GithubIcon, FaLinkedin as LinkedInIcon } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function Sections() {
  return (
    <>
      {/* ABOUT */}
      <section className={styles.section} id="about" data-aos="fade-up">
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.aboutContent}>
          I am a Computer Science student with a passion for building things that matter. I enjoy learning new technologies, working on creative projects, and growing my skills every day. My current focus is on full-stack web development, AI tools, and impactful innovation.
        </p>
        <a href="/My%20Resume.pdf" className={styles.btn} target="_blank" rel="noopener noreferrer">📄 See Resume</a>
      </section>

      {/* PROJECTS */}
      <section className={`${styles.section} ${styles.dark}`} id="projects" data-aos="zoom-in-up">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>🧠 MindForge</h3>
            <p>
              A powerful AI-powered builder that can generate websites, mobile
              apps, games, tools, and more using natural language. Combines
              multiple AI + dev tools into a single universal platform.
            </p>
            <div className={styles.cardButtons}>
              <a href="https://mind-forge-five.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.btn}>🔗 Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className={styles.section} id="achievements" data-aos="fade-up">
        <h2 className={styles.title}>Achievements & Hackathons</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>🏆 Google Cloud & Diamond League</h3>
            <p>
              Completed Generative AI Track under Google Cloud Career Launchpad Program.
              Also an active participant and Diamond League contestant in that.
            </p>
          </div>

          <div className={styles.card}>
            <h3>🤖 Hack2Skill AI for Impact</h3>
            <p>
              Built AI-based solutions in the Hack2Skill hackathon organized by
              Google Cloud to tackle real-world problems using AI.
            </p>
          </div>

          <div className={styles.card}>
            <h3>🚀 ISRO SpaceTech Innovation Hackathon</h3>
            <p>
              Developing geospatial and satellite-based solutions in India ISRO-led national 
              SpaceTech hackathon. Participating among top tech talent across the country.
            </p>
          </div>
          

          <div className={styles.card}>
  <h3>🏆 Hackovate LJ — Finalist</h3>
  <p>
    Finalist at Hackovate LJ (36-hour AI hackathon hosted by LJ University).
    Built an ML pipeline to predict cattle milk yield and flag health/anomaly risks using sensor & historical data —
    feature engineering, model training, and a small dashboard for farmer alerts.
  </p>
</div>

<div className={styles.card}>
  <h3>🌊 HackOut (DA-IICT) </h3>
  <p>
    At HackOut (DA-IICT). Developed a Coastal Threat Alert System — a prototype that fuses coastal sensor data and satellite/sea-state indicators to detect potential hazards
    (flooding/erosion) and trigger automated alerts for local authorities.
  </p>
</div>

<div className={styles.card}>
  <h3>🌍 NASA Space Apps Challenge 2025</h3>
  <p>
  
  Created Mumbai Pulse — an AI-powered platform using NASA data to monitor air quality, heat, and water for smarter, healthier cities.
  Empowering citizens and planners with real-time environmental insights and risk alerts. 🌎
  </p>
</div>

        </div>
      </section>

      {/* SKILLS */}
      <section className={styles.section} id="skills" data-aos="fade-up">
        <h2 className={styles.title}>My Skills</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <h3>C</h3>
            <p className={styles.level}>Problem Solving</p>
          </div>
          <div className={styles.skillCard}>
            <h3>C++</h3>
            <p className={styles.level}>Intermediate</p>
          </div>
          <div className={styles.skillCard}>
            <h3>Java</h3>
            <p className={styles.level}>Beginner</p>
          </div>
          <div className={styles.skillCard}>
            <h3>AI Tools</h3>
            <p className={styles.level}>Good Experience</p>
          </div>
          <div className={styles.skillCard}>
            <h3>HTML, CSS, JS</h3>
            <p className={styles.level}>Beginner</p>
          </div>
          <div className={styles.skillCard}>
            <h3>React / Next.js</h3>
            <p className={styles.level}>Learning</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={`${styles.section} ${styles.dark}`} id="contact" data-aos="fade-up">
        <h2 className={styles.title}>Get In Touch</h2>
        <ContactForm />
        <div className={styles.socialConnect}>
          <p className={styles.connectText}>Or connect with me here:</p>
          <div className={styles.socialIcons}>
            <a href="https://github.com/Neel-2606" target="_blank" rel="noopener noreferrer">
              <GithubIcon className={styles.icon} title="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/neel-prajapati-447531330" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className={styles.icon} title="LinkedIn" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>© 2025 Neel. All rights reserved.</p>
      </footer>
    </>
  );
}
