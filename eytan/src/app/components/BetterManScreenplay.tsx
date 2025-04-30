import styles from '../page.module.css';
import React from 'react';

export default function BetterMan()
{
    return (
        <div className={styles.content}>
        <div className={styles.describe}>
        Didn&apos;t get the credit way it deserved. Read the screenplay below
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

