"use client"

import styles from "./page.module.css";
import Header from "./Header";
import Menu from "./Menu";
import Mainstage from "./Mainstage";
import React, { useState } from 'react';
import Selfies from "./Selfies";






export default function Home() {
  const [proj, setProj] = useState("begin");
  const [self,setSelf] = useState(false);

  const adjustment= (enter: string) => {
    setProj(enter)
  }

  const openSelf= () => {
    setSelf(true)
  }

  const closeSelf= () => {
    setSelf(false)
  }

  return (
    <div>
      {self && <Selfies onCloseSelf={closeSelf} />}
        <div className={styles.page}>
          
        <main className={styles.main}>
      <div className={styles.head}>
        <Header project={proj} onOpenSelf={openSelf}/>
      </div>
    <div className={styles.meat}>
      <Menu action={adjustment}/>
      <Mainstage project={proj}/>
    </div>
    </main>
  </div>
    </div>

  );
}
