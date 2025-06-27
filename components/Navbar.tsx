// components/Navbar.tsx
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css"; // we’ll create this next
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${sticky ? styles.sticky : ""}`}>
      <div className={styles.maxWidth}>
        <div className={styles.logo}>
          <a href="#">
            Portfo<span>lio.</span>
          </a>
        </div>
        <ul className={`${styles.menu} ${menuActive ? styles.active : ""}`}>
          {["Home", "About", "Services", "Skills", "Teams", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className={styles.menuBtn}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.menuBtnIcon} onClick={() => setMenuActive(!menuActive)}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
