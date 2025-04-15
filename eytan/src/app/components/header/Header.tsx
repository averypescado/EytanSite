import styles from "./Header.module.css";
import Image from 'next/image';
import initial from "../../BOH.jpg"
import { useState, useEffect, useRef } from "react";

interface HeaderProps {
    onOpenSidesheet: () => void;
}

export default function Header({ onOpenSidesheet }: HeaderProps ) {
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
           Welcome to the website of Eytan Raul Boclin. This is the website of a man, yes, but it is also the website of a comedian, writer, director, and son. Littered all around this webpage you will find work by and information about this young man (read: I &apos;m 11). Click around, enjoy yourself. I don&apos;t bite. Actually I do bite (rage issues) but I can&apos;t bite you through the computer. So let me take that again. Click around, enjoy yourself. I bite, but you don&apos;t have to worry about that since you&apos;re where you are and I&apos;m where I am (Los Angeles). 
           </div> } 
            
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
                    Instagram.com/eytan
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