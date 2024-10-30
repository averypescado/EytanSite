"use client"

import styles from "./page.module.css";
import Header from "./Header";
import Menu from "./Menu";
import Mainstage from "./Mainstage";
import React, { useState } from 'react';






export default function Home() {
  const [proj, setProj] = useState("R word");

  const adjustment= (enter: string) => {
    setProj(enter)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.head}>
          <Header/>

        </div>
      <div className={styles.meat}>
        <Menu action={adjustment}/>
        <Mainstage project={proj}/>


      </div>

      </main>
    </div>
  );
}
