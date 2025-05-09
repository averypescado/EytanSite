import styles from '../page.module.css';
import React from 'react';

export default function Kramer()
{
    return (
        <div className={styles.content}>
        <div className={styles.describe}>
Remember Kramer? From Seinfeld?</div>
            <div className={styles.videoContainer}>
                <iframe 
                    className={styles.videoframe}
                    src="https://www.youtube.com/embed/RAlRuwiLdUU?si=mmENTDa2Nr16Yb1_?controls=0&modestbranding=1&rel=0&showinfo=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
    </div>
    )
}