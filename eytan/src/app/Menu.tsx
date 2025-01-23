import styles from "./page.module.css";

interface MenuProps {
    action: (project: string) => void;


  }

export default function Menu({ action }: MenuProps) {
    return (
        <ul className={styles.list}> 
            <li className={styles.project} onClick={() => action("R word")}>The R word is Back</li>
            <li className={styles.project} onClick={() => action("Bronsons")}>Bronsons Honey</li>
            <li className={styles.project} onClick={() => action("Hoop Dreams 3D")}>Hoop Dreams 3D</li>
            <li className={styles.project} onClick={() => action("Hoop Dreams 2")}>Hoop Dreams 2</li>
            <li className={styles.project} onClick={() => action("30 Minutes")}>30 minutes</li>
            <li className={styles.project} onClick={() => action("standup")}>Standup Clips</li>
            <li className={styles.project} onClick={() => action("oly")}>2 Olympic Sports you already knew existed</li>
            <li className={styles.project} onClick={() => action("Argentina")}>Argentine Soccer Announcer Looking at a Tree</li>
            <li className={styles.project} onClick={() => action("Periodical")}>Periodical</li>
            <li className={styles.project} onClick={() => action("Harrowing")}>My Harrowing Immigrant Tale</li>


        </ul>

        
    )
}