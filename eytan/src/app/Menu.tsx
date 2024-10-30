import styles from "./page.module.css";
export default function Menu({action}) {
    return (
        <ul className={styles.list}> 
            <li className={styles.project} onClick={() => action("R word")}>The R word is Back</li>
            <li className={styles.project} onClick={() => action("Bronsons")}>Bronson's Honey</li>
            <li className={styles.project} onClick={() => action("Hoop Dreams 3D")}>Hoop Dreams 3D</li>
            <li className={styles.project} onClick={() => action("Hoop Dreams 2")}>Hoop Dreams 2</li>
            <li className={styles.project} onClick={() => action("30 Minutes")}>30 minutes</li>
            <li className={styles.project}>Standup Clips</li>
            <li className={styles.project}>2 Olympic Sports you already knew existed</li>
            <li className={styles.project}>Argentine Soccer Announcer Looking at a Tree</li>
            <li className={styles.project}>Periodical</li>


        </ul>

        
    )
}