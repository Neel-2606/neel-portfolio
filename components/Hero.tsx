// components/Hero.tsx
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
       <h1>Hello, I&apos;m <span>Neel</span></h1>
        <h2 className={styles.typing}>Developer | Designer | Freelancer</h2>
        <p>I build amazing websites using modern technologies.</p>
        <a href="#contact" className={styles.button}>Get In Touch</a>
      </div>
    </section>
  );
}
