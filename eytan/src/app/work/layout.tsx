// Layout.tsx
"use client"

import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import styles from "./work.module.css"
import Selfies from "../components/selfies/Selfies";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [sidesheetOpen, setSidesheetOpen] = useState(false);
    return (
        <div>
            {sidesheetOpen && <Selfies onCloseSidesheet={() => setSidesheetOpen(false)} />}
            <Header onOpenSidesheet={() => setSidesheetOpen(true)} />
            
            <div className={styles.flex}>
                <Menu />
                <div className={styles.kids}>
                    {children}
                </div>
            </div>
        </div>
    )
}