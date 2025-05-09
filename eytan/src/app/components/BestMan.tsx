import styles from '../page.module.css';
import React from 'react';

export default function BetterMan()
{
    return (
        <div className={styles.content}>
        <div className={styles.describe}>
        Love this thing. Didn&apos;t get the credit it deserved when it came out
        </div>
        <div className={styles.videoContainer}>
            <iframe src='/betterman.pdf'
                    width="100%"
                    height="800px"
                />
        </div>
    </div>
    )


}

