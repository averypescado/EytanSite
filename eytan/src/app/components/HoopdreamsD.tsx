import styles from '../page.module.css';
import Image from 'next/image';
import React, { useState } from 'react';
import poster from "../poster.jpg";

export default function HoopDreamsD()
{
    return (
        <div className={styles.content}>
        <div className={styles.describe}>Hoop Dreams 3D:<br></br>
            The sequel to Hoop Dreams 2. Liam&apos;s priorities shift from basketball to his new passion: acting. Eytan sets out to document his friend&apos;s journey, this time keen on authority and control. 2024. Co-directed, written, and starring with Liam Klinkenberg. 
        </div>
            <div className={styles.videoContainer}>
                <iframe 
                    className={styles.videoframe}
                    src="https://www.youtube.com/embed/6L-tcbPPB40?si=saxmRMtQwiIoHXeu&controls=0&modestbranding=1&rel=0&showinfo=0" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
           
        <div>
            <div className={styles.poster}>
                <Image
                    src={poster}
                    width= {400}
                    alt="Poster"
                    />
            </div>
            <div className={styles.padd}>Poster by Tyler Rubenfeld</div>
        </div> 
    </div>
    )


}

