'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#about', '#services', '#skills', '#teams', '#contact'];
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 100 && top >= -300) {
            setActiveLink(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Portfolio</div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
          <li><a href="#home" className={activeLink === '#home' ? styles.active : ''}>Home</a></li>
          <li><a href="#about" className={activeLink === '#about' ? styles.active : ''}>About</a></li>
          <li><a href="#services" className={activeLink === '#services' ? styles.active : ''}>Services</a></li>
          <li><a href="#skills" className={activeLink === '#skills' ? styles.active : ''}>Skills</a></li>
          <li><a href="#teams" className={activeLink === '#teams' ? styles.active : ''}>Teams</a></li>
          <li><a href="#contact" className={activeLink === '#contact' ? styles.active : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


