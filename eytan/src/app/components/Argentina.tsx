import styles from '../page.module.css';
import React from 'react';

export default function Argentina()
{
    return (
        <div className={styles.content}>
        <div className={styles.describe}>
        Argentinean Soccer Announcer Looking At A Tree
        </div>
            <div className={styles.videoContainer}>
            <video 
                className={styles.wide}
                controls
                loop
                muted
                playsInline
            >
            <source src="/videos/argtree.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
    )


}