import styles from '../page.module.css';
import Image from 'next/image';
import React, { useState } from 'react';

export default function RWord()
{
    return (
        <div className={styles.content}>

        <div className={styles.describe}>The R Word Is Back:<br></br>
        Investigating the resurgence of the R word -- retail. Made with Ben Gauthier.</div>
            <div className={styles.videoContainer}>
                <iframe 
                    className={styles.videoframe}
                    src="https://www.youtube.com/embed/iNHRw8nvm28?controls=0&modestbranding=1&rel=0&showinfo=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
    </div>
    )


}

