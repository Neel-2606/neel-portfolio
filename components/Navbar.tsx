'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#about', '#projects', '#achievements', '#skills', '#contact'];
      let found = false;

      for (const id of sections) {
        const el = document.querySelector(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 100 && top >= -300) {
            setActiveLink(id);
            found = true;
            break;
          }
        }
      }

      // If no section is in view, assume at top → set to #home
      if (!found && window.scrollY < 200) {
        setActiveLink('#home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveLink('#home');
  };

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
          <li>
            <a
              href="#"
              onClick={scrollToTop}
              className={activeLink === '#home' ? styles.active : ''}
            >
              Home
            </a>
          </li>
          <li><a href="#about" className={activeLink === '#about' ? styles.active : ''}>About</a></li>
          <li><a href="#projects" className={activeLink === '#projects' ? styles.active : ''}>Projects</a></li>
          <li><a href="#achievements" className={activeLink === '#achievements' ? styles.active : ''}>Achievements</a></li>
          <li><a href="#skills" className={activeLink === '#skills' ? styles.active : ''}>Skills</a></li>
          <li><a href="#contact" className={activeLink === '#contact' ? styles.active : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
