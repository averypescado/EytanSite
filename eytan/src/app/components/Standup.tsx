import styles from '../page.module.css';
import React from 'react';

export default function Standup()
{
    return (
        <div className={styles.content}>

        <div className={styles.describe}>Standup Clips<br></br>
        Opening for Natalie Rotter-Laitman at Dynasty Typewriter 
        </div>
            <div className={styles.videoContainer}>
              <iframe 
                  className={styles.videoframe}
                  src="https://www.youtube.com/embed/GeFLF0mkpK4?si=GpirxnV79nX9D4tw&controls=0&modestbranding=1&rel=0&showinfo=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
              />
            </div>
            <div className={styles.describe}>
        Clip Number 2
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

