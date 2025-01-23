import styles from "./page.module.css";
import headshot from "./headshot.png"
import Image from 'next/image';
import back from "./back.png"
import React, { useState } from 'react';

interface HeaderProps {
    project: string;
    onOpenSelf: () => void;
}


export default function Header({ project, onOpenSelf }: HeaderProps) {
    const [direct, setDirect] = useState(true);
    const flip = () => {
        setDirect(!direct)
    }

    return (
        <div className={styles.header}>
            <div>
                Eytan Boclin
                <br />
                Jefe
            </div>
            <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it 
            </div>
            <div className={styles.contact}>
                CONTACT INFO<br />
                eytaboclin@gmail.com <br />
                Instagram.com/eytan
            </div>
            
            {project !== 'begin' && (
                <div className={styles.headshot}>
                    <div>
                        <button className={styles.back} onClick={flip}>{direct ? 'see back' : 'see front'} </button>
                        <button className={styles.back} onClick={onOpenSelf}> Selfies</button>
                        <button className={styles.back} onClick={flip}> Good pics</button>
                    </div>
                    <div>
                        <Image
                            src={direct ? headshot : back}
                            width={162}
                            alt="headshot"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}