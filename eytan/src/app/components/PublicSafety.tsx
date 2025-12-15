import styles from '../page.module.css';
import React from 'react';

export default function PublicSafety()
{
    return (
        <div className={styles.content}>

        <div className={styles.describe}>
        Putting a stop to a Los Angeles public safety crisis. Made with Zach Dunn</div>
            <div className={styles.videoContainer}>
                <iframe 
                    className={styles.videoframe}
                    src="https://www.youtube.com/embed/ArpBtCLPmGQ?si=cnThDnfI2-Iwh5iy?controls=0&modestbranding=1&rel=0&showinfo=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
    </div>
    )


}

