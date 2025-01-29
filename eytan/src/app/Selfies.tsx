import styles from "./page.module.css";
import React from 'react';
import Gallery from "./Gallery";

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
                <Gallery />
                
            </div>
            
        </div>

    )
}