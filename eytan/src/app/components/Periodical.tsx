import styles from '../page.module.css';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import periodical from '../periodical.png'

export default function Periodical()
{
    return (
        <div className={styles.content}>
        <div className={styles.describe}>Periodical
        :<br></br>
        A zine I ran via email and leaving print copies in coffee shops around New York and LA. In the last issue, super-director Damien Chazelle buys the zine and turns it into multi-media conglomerate Periodical Inc, Incorporated. Replete with a website befitting any international corporation.

</div>
            <div className={styles.videoContainer}>
                <Image
                
                    src={periodical}
                    width={1600}
                    height={900}
                    alt="Poster"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain'
                    }}
                />  
            </div>
            <div className={styles.periodicals}>
            <Link 
                href="https://www.periodicalincinc.com/issue_pdfs/issue_1.pdf" 
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                    backgroundImage: `url('/per1.png')`
                  }}
            >
                <div className={styles.overlay} />
                <span className={styles.label}>Issue 1</span>
            </Link>
            
            <Link 
                href="https://www.periodicalincinc.com/issue_pdfs/issue_2.pdf" 
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                    backgroundImage: `url('/per2.png')`
                  }}
            >
                <div className={styles.overlay} />
                <span className={styles.label}>Issue 2</span>
            </Link>

            <Link 
                href="https://www.periodicalincinc.com/issue_pdfs/issue_3.pdf" 
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                    backgroundImage: `url('/per3.png')`
                  }}
            >
                <div className={styles.overlay} />
                <span className={styles.label}>Issue 3</span>
            </Link>

            

        </div>


            

    </div>
    )


}

