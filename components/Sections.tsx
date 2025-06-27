import styles from "@/styles/Sections.module.css";

export default function Sections() {
  return (
    <>
      {/* ABOUT */}
      <section className={styles.section} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.aboutContent}>
          <p>
            <p>I&apos;m a passionate developer</p>

          </p>
          <a href="#" className={styles.btn}>Download CV</a>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`${styles.section} ${styles.dark}`} id="services">
        <h2 className={styles.title}>What I Do</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Web Development</h3>
            <p>Responsive websites using modern frameworks and best practices.</p>
          </div>
          <div className={styles.card}>
            <h3>UI/UX Design</h3>
            <p>Clean and intuitive interfaces for websites and applications.</p>
          </div>
          <div className={styles.card}>
            <h3>Freelancing</h3>
            <p>Collaborative project delivery with a focus on quality and efficiency.</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className={styles.section} id="skills">
        <h2 className={styles.title}>My Skills</h2>
        <div className={styles.skills}>
          <div className={styles.skillBar}>
            <span>HTML</span>
            <div><div className={styles.bar} style={{ width: "90%" }} /></div>
          </div>
          <div className={styles.skillBar}>
            <span>CSS</span>
            <div><div className={styles.bar} style={{ width: "85%" }} /></div>
          </div>
          <div className={styles.skillBar}>
            <span>JavaScript</span>
            <div><div className={styles.bar} style={{ width: "80%" }} /></div>
          </div>
          <div className={styles.skillBar}>
            <span>React</span>
            <div><div className={styles.bar} style={{ width: "75%" }} /></div>
          </div>
          <div className={styles.skillBar}>
            <span>Next.js</span>
            <div><div className={styles.bar} style={{ width: "70%" }} /></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={`${styles.section} ${styles.dark}`} id="contact">
        <h2 className={styles.title}>Get In Touch</h2>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required />
          <button type="submit" className={styles.btn}>Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>© 2025 Neel. All rights reserved.</p>
      </footer>
    </>
  );
}
