'use client';

import styles from "./work.module.css";
import Selfies from "../components/selfies/Selfies";
import Headshot from "../components/headshot/Headshot";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu"; // Adjust import path as needed

export default function Layout({ children }: { children: React.ReactNode }) {
    const [selfiesheetOpen, setSelfiesheetOpen] = useState(false);
    const [headshotsheetOpen, setHeadshotsheetOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();
    
    // Check if we're on the /work page or a project page
    const isWorkProjectPage = pathname.startsWith('/work/') && pathname !== "/work";
    
    // Check screen width on mount and when window resizes
    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
        };
        
        // Initial check
        checkScreenWidth();
        
        // Add event listener for window resize
        window.addEventListener("resize", checkScreenWidth);
        
        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", checkScreenWidth);
    }, []);
    
    return (
        <div>
            {selfiesheetOpen && <Selfies onCloseSidesheet={() => setSelfiesheetOpen(false)} />}
            {headshotsheetOpen && <Headshot onCloseSidesheet={() => setHeadshotsheetOpen(false)} />}
            <Header 
                onOpenSidesheet={() => setSelfiesheetOpen(true)}
                onOpenHeadshot={() => setHeadshotsheetOpen(true)}
                
        
            />
            
            <div className={`${styles.flex} ${isMobile ? styles.mobileLayout : ''}`}>
                {/* Always show Menu on desktop, or on mobile when on landing page */}
                {(!isMobile || (isMobile && !isWorkProjectPage)) && (
                    <Menu className={isMobile ? styles.fullWidthMenu : ''} />
                )}
                
                {/* On mobile: Only show content when on a project page */}
                {/* On desktop: Always show the content section */}
                {(!isMobile || (isMobile && isWorkProjectPage)) && (
                    <div className={`${styles.kids} ${isMobile ? styles.fullWidthContent : ''}`}>
                        {/* Only show X button on mobile project pages */}
                        {isMobile && isWorkProjectPage && (
                            <Link href="/work" className={styles.closeButton}>
                                <span className={styles.closeX}>×</span>
                            </Link>
                        )}
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}