

import styles from "./page.module.css";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Mainstage from "./Mainstage";
import React, { useState, useEffect } from 'react';
import Selfies from "./components/selfies/Selfies";
import MobileOverlay from './MobileOverlay';
import Image from "next/image";
import initial from "./BOH.jpg";
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.holder}>
      <div className={styles.bio}>
         <div>Welcome to the website of Eytan Raul Boclin. This is the website of a man, yes, but it is also the website of a comedian, writer, director, and son. Littered all around this webpage you will find work by and information about this young man (read: I'm 11). Click around, enjoy yourself. I don't bite. Actually I do bite (rage issues) but I can't bite you through the computer. So let me take that again. Click around, enjoy yourself. I bite, but you don't have to worry about that since you're where you are and I'm where I am (Los Angeles).  </div> 
          <Link 
            href="/work/hoopdreams2"
          >
            <button className={styles.button}>
              Work
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