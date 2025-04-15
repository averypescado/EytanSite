import styles from '../page.module.css';
import React from 'react';

export default function NamePoem()
{
    return (
        <div className={styles.content}>

        <div className={styles.describe}>
        Recorded at the Bell House 3.20.25
        </div>
            <div className={styles.videoContainer}>
                <iframe 
                    className={styles.videoframe}
                    src= "https://www.youtube.com/embed/1gvNocMmJAE?si=vkO83pZ8y21fD5yZ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            
            </div>



    </div>
    )
}