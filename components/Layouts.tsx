import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import styles from "@/styles/Layout.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

