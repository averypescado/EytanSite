import styles from "./Header.module.css";
import Image from 'next/image';
import initial from "../../BOH.jpg"
import { useState, useEffect } from "react";



interface HeaderProps {
    onOpenSidesheet: () => void;
  }


export default function Header({ onOpenSidesheet }: HeaderProps ) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobile(window.innerWidth < 900); // Adjust breakpoint as needed
        };
        
        // Initial check
        checkScreenWidth();
        
        // Add event listener for window resize
        window.addEventListener("resize", checkScreenWidth);
        
        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", checkScreenWidth);
    }, []);



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
            {!isMobile && <div className={styles.contact}>
                Reps<br />
                oghersen@vervetla.com<br />
                jtrofa@vervetla.com<br/>
                <br />
                <hr/>
                Me <br />
                eytaboclin@gmail.com <br />
                Instagram.com/eytan
            </div>}
            {isMobile && <button className={styles.contactbut}> contact</button>}

            
            {!isMobile && <div className={styles.headshot}>
                <div>
                    <button 
                        className={styles.back}
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
            </div> 
        }
            
        </div>
    )
}