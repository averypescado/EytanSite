import styles from "./Menu.module.css";
import Link from "next/link";


export default function Menu() {
    return (
        <ul className={styles.list}> 
            <Link
                href="/work/hoopdreams2"
            >
                <li className={styles.project}>
                    Hoop Dreams 2
                </li>
            </Link>

            <Link
                href="/work/hoopdreams3">
                <li className={styles.project}>Hoop Dreams 3D</li>
            
            </Link>
            
            <Link
                href="/work/rword">
                <li className={styles.project}>The R word is Back</li>
            </Link>
            <li className={styles.project}>Toyota Problem</li>
            <Link
                href="/work/standup">
            <li className={styles.project}>Standup</li>
            </Link>
            <Link
                href="/work/periodical">
                <li className={styles.project}>Periodical</li>
            </Link>
            <Link
                href="/work/argentina"
            >
                <li className={styles.project}>Argentine Soccer Announcer Looking at a Tree</li>
            </Link>
            <li className={styles.project}>2 Olympic Sports you already knew existed</li>
            <Link
                href="/work/bronsons"
            >
            <li className={styles.project}>Bronsons Honey</li>
            </Link>
        </ul>
    )
}