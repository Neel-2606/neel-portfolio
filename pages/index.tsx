// pages/index.tsx
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sections from "@/components/Sections";


export default function Home() {
  return (
    <>
      <Head>
        <title>Neel Portfolio</title>
        <meta name="description" content="Neel's personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
    </>
  );
}

