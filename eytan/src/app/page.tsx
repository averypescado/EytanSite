

import styles from "./page.module.css";
import React from 'react';
import Image from "next/image";
import initial from "./backof.jpg";
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.holder}>
      <div className={styles.bio}>
         <div className={styles.introduction}>Eytan Raul Boclin </div>
          <Link 
            href="/work/hoopdreams2"
          >
            <button className={styles.button}>
              You only got one choice
            </button>
          
          </Link>
      </div>
      <Image
          src={initial}
          alt="headshot"
          height={500}
          className={styles.head}
      />
    </div>
);
}