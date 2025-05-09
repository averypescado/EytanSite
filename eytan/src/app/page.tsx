import styles from "./page.module.css";
import React from 'react';
import Image from "next/image";
import initial from "./backof.jpg";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Eytan Raul Boclin</h1>
      
      <div className={styles.buttonWrapper}>
        <Link href="/work/hoopdreams2">
          <button className={styles.button}>
            You only got one choice
          </button>
        </Link>
      </div>
      
      <Image
        src={initial}
        alt="headshot"
        width={500}
        height={500}
        className={styles.headshot}
      />
    </div>
  );
}