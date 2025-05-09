import styles from '../page.module.css';
import React from 'react';

export default function RWord()
{
    return (
        <div className={styles.content}>

        <div className={styles.describe}>
        Investigating the resurgence of the R word -- retail.</div>
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

