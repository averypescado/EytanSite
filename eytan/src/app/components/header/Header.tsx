import styles from "./Header.module.css";
import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";


interface HeaderProps {
    onOpenSidesheet: () => void;
    onOpenHeadshot: () => void;
}

export default function Header({ onOpenSidesheet, onOpenHeadshot }: HeaderProps ) {
    const [isMobile, setIsMobile] = useState(false);
    const [showContactPopover, setShowContactPopover] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
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

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className={styles.header}>
            <div>
                Eytan Boclin
                <br />
                <button 
                    className={styles.videoButton}
                    onClick={toggleVideo}
                    aria-label="Play video"
                >
                    {isPlaying ? '⏸' : 'Im Eytan'}
                </button>
                {/* Hidden video element */}
                <video 
                    ref={videoRef}
                    className={styles.videoPlayer}
                    src="/Name.m4a"
                    onEnded={() => setIsPlaying(false)}
                    playsInline
                    />
            </div>
           {!isMobile &&
           <div>
           Welcome to the website of Eytan Raul Boclin. Click around, I don&apos;t bite. You know what I actually do bite (territorial) but either way it&apos;s fine because we&apos;re not in the same place.
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
                    <Link 
                              href="https://www.instagram.com/eytanboclin/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                    >
                        <div className={styles.flex}>@eytanboclin <FaInstagram size={20} className={styles.instagramIcon} /> </div>
                    </Link>

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
                        Pictures of my face
                    </button>
                    <button 
                        className={styles.selfiesbut}
                        onClick={onOpenHeadshot} 
                    > 
                        Headshots
                    </button>
                </div>
            </div>}
        </div>
    )
}