import { ReactNode } from "react";
import Navbar from "./Navbar";
import styles from "@/styles/Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
