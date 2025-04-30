import styles from '../page.module.css';
import React from 'react';

export default function Standup()
{
    return (
        <div className={styles.content}>

        <div className={styles.describe}>
        Opening for Natalie Rotter-Laitman at Dynasty Typewriter 
        </div>
            <div className={styles.videoContainer}>
              <iframe 
                  className={styles.videoframe}
                  src="https://www.youtube.com/embed/GeFLF0mkpK4?si=GpirxnV79nX9D4tw&modestbranding=1&rel=0&showinfo=0&start=157"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
              />
            </div>
            <div className={styles.describe}>
        Heat Wave 3.13
        </div>
            <div className={styles.videoContainer}>
                <iframe 
                    className={styles.videoframe}
                    src= "https://www.youtube.com/embed/-BkaIorWZZY?si=dVNnWeOlMAj93E3O"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>



    </div>
    )


}

