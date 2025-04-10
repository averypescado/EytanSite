import styles from '../page.module.css';
import React from 'react';

export default function Bronsons()
{
    return (
        <div className={styles.content}>
        <div className={styles.describe}>Bronsons Honey:<br></br>
        A sketch I made the first year out of college, can you tell? Directed by Natalie Price. Featuring Natalie Rotter-Laitman, Daniel Liu, Macy Atkinson. 
</div>
            <div className={styles.videoContainer}>
                <iframe 
                    className={styles.videoframe}
                    src="https://www.youtube.com/embed/GUv1NWkpcqg?controls=0&modestbranding=1&rel=0&showinfo=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
    </div>
    )


}

