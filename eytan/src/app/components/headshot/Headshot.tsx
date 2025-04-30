// Selfies.tsx
"use client"


import styles from "./Headshot.module.css";
import Image from "next/image";
import initial from "../../backof.jpg";


interface HeadShotProps {
  onCloseSidesheet: () => void;
}


export default function Headshot({ onCloseSidesheet }: HeadShotProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>

      <button
          onClick={onCloseSidesheet} 
          className={styles.closebut}
      > 
      Close
      </button>
      <Image
          src={initial}
          alt="headshot"
          width={452}
          className={styles.head}
      />

        </div>
    </div>
  );
}