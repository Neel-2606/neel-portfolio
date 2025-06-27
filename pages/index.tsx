import Head from "next/head";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Neel Portfolio</title>
        <meta name="description" content="Neel's personal portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />

        <section className={styles.section}>
          <h1>Welcome to My Dark Themed Portfolio</h1>
          <p>This is where your awesome content will go!</p>
        </section>
      </main>
    </>
  );
}
