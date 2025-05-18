import styles from '../page.module.css';
import React from 'react';


export default function HoopDreams2()
{
    return (
        <div className={styles.content}>
        <div className={styles.describe}>
        Mockumentary about a young man who, after surviving a coma suffered on a construction site, uses his new lease on life to embark on a quixotic journey: playing in the NBA. 2020. Co-directed with Liam Klinkenberg. 

        </div>
            <div className={styles.videoContainer}>
                <iframe 
                    className={styles.videoframe}
                    src="https://www.youtube.com/embed/hTXW1R2XAbo?si=-n_e9K_Ov4Ue0LjE&controls=0&modestbranding=1&rel=0&showinfo=0" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
    
    </div>
    )


}

