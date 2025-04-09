import { useState, useRef, useEffect } from 'react';
import styles from "./page.module.css";

interface MobileOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function MobileOverlay({ isOpen, onClose, children }: MobileOverlayProps) {
    const [startY, setStartY] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const overlayRef = useRef<HTMLDivElement>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setCurrentY(e.touches[0].clientY - startY);
    };

    const handleTouchEnd = () => {
        if (currentY > 100) { // If dragged down more than 100px
            onClose();
        }
        setCurrentY(0);
    };

    if (!isOpen) return null;

    return (
        <div 
            className={styles.mobileOverlay}
            ref={overlayRef}
            style={{
                transform: `translateY(${currentY > 0 ? currentY : 0}px)`
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <button className={styles.closeButton} onClick={onClose}>×</button>
            <div className={styles.overlayContent}>
                {children}
            </div>
        </div>
    );
}