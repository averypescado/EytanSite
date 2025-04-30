import styles from '../page.module.css';
import React from 'react';

export default function Toyota()
{
    return (
        <div className={styles.content}>

        <div className={styles.describe}>
        Getting to the bottom of Toyota&apos;s domination of LA&apos;s streets. Made with Ben Gauthier</div>
            <div className={styles.videoContainer}>
                <iframe 
                    className={styles.videoframe}
                    src="https://www.youtube.com/embed/b4MQVVbRULI?si=5Ulppap2f09pYx4M?controls=0&modestbranding=1&rel=0&showinfo=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
    </div>
    )


}

