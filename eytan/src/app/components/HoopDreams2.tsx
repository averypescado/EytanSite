import styles from '../page.module.css';
import Image from 'next/image';
import React, { useState } from 'react';

export default function HoopDreams2()
{
    return (
        <div className={styles.content}>
        <div className={styles.describe}>Hoop Dreams 2:<br></br>
        Mockumentary about a young man who, after surviving a coma suffered on a construction site, uses his new lease on life to embark on a quixotic journey: playing in the NBA. 2020. Co-directed with Liam Klinkenberg. 

        </div>
            <div className={styles.videoContainer}>
            <div className={styles['video-container']}>
        <iframe 
            className={styles.videoframe}
            src="https://player.vimeo.com/video/448416507?color=000000&title=0&byline=0&portrait=0&speed=0&pip=0&share=0&collections=0"
            title="Vimeo video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        />
    </div>
            </div>
        <div>
        </div> 
    </div>
    )


}

