import styles from "./Header.module.css";
import Image from 'next/image';
import initial from "../../BOH.jpg"
import { useState, useEffect, useRef } from "react";

interface HeaderProps {
    onOpenSidesheet: () => void;
    onOpenHeadshot: () => void;
}

export default function Header({ onOpenSidesheet, onOpenHeadshot }: HeaderProps ) {
    const [isMobile, setIsMobile] = useState(false);
    const [showContactPopover, setShowContactPopover] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobile(window.innerWidth < 900); // Adjust breakpoint as needed
            if (window.innerWidth >= 900) {
                setShowContactPopover(false); // Reset popover when switching to desktop
            }
        };
        
        // Initial check
        checkScreenWidth();
        
        // Add event listener for window resize
        window.addEventListener("resize", checkScreenWidth);
        
        // Add click event listener to close popover when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (
                showContactPopover &&
                popoverRef.current &&
                buttonRef.current &&
                !popoverRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setShowContactPopover(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        
        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener("resize", checkScreenWidth);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showContactPopover]);

    const toggleContactPopover = () => {
        setShowContactPopover(!showContactPopover);
    };

    return (
        <div className={styles.header}>
            <div>
                Eytan Boclin
                <br />
                Jefe
            </div>
           {!isMobile &&
           <div>
            Welcome to the website of Eytan Raul Boclin. Click around, I don&apos;t bite. You know what I actually do bite (I&apos;m very territorial) but either way it&apos;s fine since I can&apos;t bite you through the computer. So let me take that again. Click around, I bite, but you don&apos;t have to worry about that since you&apos;re safe since I&apos;m not in the same place as you.  </div> } 
            
            {/* Contact info shown on desktop */}
            {!isMobile && 
                <div className={styles.contact}>
                    Reps<br />
                    oghersen@vervetla.com<br />
                    jtrofa@vervetla.com<br/>
                    <br />
                    <hr/>
                    Me <br />
                    eytaboclin@gmail.com <br />
                    https://www.instagram.com/eytanboclin
                </div>
            }
            
            {/* Contact button for mobile - keep original positioning */}
            {isMobile && 
                <button 
                    ref={buttonRef}
                    className={styles.contactbut}
                    onClick={toggleContactPopover}
                    aria-expanded={showContactPopover}
                    aria-haspopup="true"
                > 
                    contact
                </button>
            }
            
            {/* Popover that appears when button is clicked */}
            {isMobile && showContactPopover && (
                <div 
                    ref={popoverRef}
                    className={styles.contactPopover}
                    role="dialog"
                    aria-label="Contact information"
                >
                    <div className={styles.popoverContent}>
                        <button 
                            className={styles.closePopover}
                            onClick={() => setShowContactPopover(false)}
                            aria-label="Close contact information"
                        >
                            ✕
                        </button>
                        <div>
                            <strong>Reps</strong><br />
                            oghersen@vervetla.com<br />
                            jtrofa@vervetla.com<br/>
                            <br />
                            <hr/>
                            <strong>Me</strong><br />
                            eytaboclin@gmail.com <br />
                            Instagram.com/eytan
                        </div>
                    </div>
                </div>
            )}
            
            {!isMobile && <div className={styles.headshot}>
                <div>
                    <button 
                        className={styles.selfiesbut}
                        onClick={onOpenSidesheet} 
                    > 
                        Selfies
                    </button>
                    <button 
                        className={styles.selfiesbut}
                        onClick={onOpenHeadshot} 
                    > 
                        Headshots
                    </button>
                </div>
                <div>
                    <Image
                        src={initial}
                        height={142}
                        alt="headshot"
                    />
                </div>
            </div>}
        </div>
    )
}