// components/Hero.tsx
'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import Typed from 'typed.js';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Developer', 'Designer', 'Freelancer'],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Hello, I&apos;m <span className={styles.name}>Neel</span></h1>
        <h2 className={styles.typing}><span ref={typedRef}></span></h2>
        <p>I build amazing websites using modern technologies.</p>
        <a href="#contact" className={styles.button}>📬 Get In Touch</a>
      </div>
    </section>
  );
}

