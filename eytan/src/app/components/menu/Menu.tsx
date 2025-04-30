// Updated Menu.jsx with className prop
import styles from "./Menu.module.css";
import Link from "next/link";

interface MenuProps {
    className: string;
  }

export default function Menu({ className}: MenuProps ) {
    return (
        <ul className={`${styles.list} ${className || ''}`}> 
            <Link href="/work/hoopdreams2">
                <li className={styles.project}>
                    Hoop Dreams 2
                </li>
            </Link>

            <Link href="/work/hoopdreams3D">
                <li className={styles.project}>Hoop Dreams 3D</li>
            </Link>
            
            <Link href="/work/rword">
                <li className={styles.project}>The R word is Back</li>
            </Link>
            <Link href="/work/TheToyotaProblem">
                <li className={styles.project}>The Toyota Problem</li>
            </Link>
            
            <Link href="/work/standup">
                <li className={styles.project}>Standup</li>
            </Link>
            <Link href="/work/periodical">
                <li className={styles.project}>Periodical</li>
            </Link>
            <Link href="/work/argentina">
                <li className={styles.project}>Argentine Soccer Announcer Looking at a Tree</li>
            </Link>
            <li className={styles.project}>2 Olympic Sports you already knew existed</li>
            <Link href="/work/bronsons">
                <li className={styles.project}>Bronsons Honey</li>
            </Link>
            <Link href="/work/namepoem">
                <li className={styles.project}>Name Poem</li>
            </Link>
            <Link href="/work/kramer">
                <li className={styles.project}>Remember Kramer? From Seinfeld?</li>
            </Link>
            <Link href="/work/betterman">
                <li className={styles.project}>Better Man Screenplay</li>
            </Link>
        </ul>
    )
}