import styles from "@/styles/Sections.module.css";
import { FaGithub as GithubIcon, FaLinkedin as LinkedInIcon } from "react-icons/fa";

export default function Sections() {
  return (
    <>
      {/* ABOUT */}
      <section className={styles.section} id="about" data-aos="fade-up">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.aboutContent}>
          <p>
            I am a Computer Science student with a passion for building things
            that matter. I enjoy learning new technologies, working on creative
            projects, and growing my skills every day. My current focus is on
            full-stack web development, AI tools, and impactful innovation.
          </p>
          <a href="#" className={styles.btn}>📄 Download Resume</a>
        </div>
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
        <a href="#" className={styles.btn}>🔗 Demo</a>
        <a href="#" className={styles.btn}>💻 GitHub</a>
      </div>
    </div>
  </div>
</section>


      {/* ACHIEVEMENTS */}
      <section className={styles.section} id="achievements" data-aos="fade-right">
        <h2 className={styles.title}>Achievements & Hackathons</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Google Cloud Career Launchpad</h3>
            <p>Completed Generative AI Track under the Cloud Career Launchpad Program.</p>
          </div>
          <div className={styles.card}>
            <h3>Diamond League Participant</h3>
            <p>Active participant in elite tech challenges and hackathons.</p>
          </div>
          <div className={styles.card}>
            <h3>Hack2Skill Hackathon</h3>
            <p>Developed AI-based solutions during a 48-hour hackathon event.</p>
          </div>
          <div className={styles.card}>
            <h3>AI for Impact Hackathon</h3>
            <p>Participated in Google Cloud AI for Impact to solve real-world problems using AI.</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className={styles.section} id="skills" data-aos="fade-up">
        <h2 className={styles.title}>My Skills</h2>
        <div className={styles.skills}>
          <div className={styles.skillBar}><span>C</span><div><div className={styles.bar} style={{ width: "85%" }} /></div></div>
          <div className={styles.skillBar}><span>C++</span><div><div className={styles.bar} style={{ width: "80%" }} /></div></div>
          <div className={styles.skillBar}><span>Java</span><div><div className={styles.bar} style={{ width: "75%" }} /></div></div>
          <div className={styles.skillBar}><span>AI Tools</span><div><div className={styles.bar} style={{ width: "70%" }} /></div></div>
          <div className={styles.skillBar}><span>Web Development (HTML, CSS, JS)</span><div><div className={styles.bar} style={{ width: "78%" }} /></div></div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={`${styles.section} ${styles.dark}`} id="contact" data-aos="fade-up">
        <h2 className={styles.title}>Get In Touch</h2>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required />
          <button type="submit" className={styles.btn}>Send Message</button>
        </form>
        <div className={styles.socialIcons}>
          <GithubIcon className={styles.icon} />
          <LinkedInIcon className={styles.icon} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>© 2025 Neel. All rights reserved.</p>
      </footer>
    </>
  );
}

