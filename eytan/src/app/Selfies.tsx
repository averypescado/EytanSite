import styles from "./page.module.css";
import headshot from "./headshot.png"
import Image from 'next/image';
import back from "./back.png"
import React, { useState } from 'react';

interface SelfiesProps {
    onCloseSelf: () => void;
}

export default function Selfies({onCloseSelf}: SelfiesProps) {
  
    return (
        <div className={styles.blur}>
            <div className={styles.side}>
            <button onClick={onCloseSelf}>X</button>
                <div>
                    Smiles all Around
                </div>
                
            </div>
            
        </div>

    )
}