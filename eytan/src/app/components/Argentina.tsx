import styles from '../page.module.css';
import React from 'react';

export default function Argentina()
{
    return (
        <div className={styles.content}>
        <div className={styles.describe}>Hoop Dreams 3D:<br></br>
            The sequel to Hoop Dreams 2. Liam&apos;s priorities shift from basketball to his new passion: acting. Eytan sets out to document his friend&apos;s journey, this time keen on authority and control. 2024. Co-directed, written, and starring with Liam Klinkenberg. 
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