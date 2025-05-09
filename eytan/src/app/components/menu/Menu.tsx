// Updated Menu.jsx with className prop
import styles from "./Menu.module.css";
import Link from "next/link";

interface MenuProps {
    className: string;
  }

export default function Menu({ className}: MenuProps ) {
    return (
        <ul className={`${styles.list} ${className || ''}`}> 
            <Link href="/work/hoop-dreams-2">
                <li className={styles.project}>
                    Hoop Dreams 2
                </li>
            </Link>
            <Link href="/work/hoop-dreams-3d">
                <li className={styles.project}>Hoop Dreams 3D</li>
            </Link>

            <Link href="/work/the-toyota-problem">
                <li className={styles.project}>The Toyota Problem</li>
            </Link>
            
            <Link href="/work/r-word-is-back">
                <li className={styles.project}>The R word Is Back</li>
            </Link>

            <Link href="/work/name-poem">
                <li className={styles.project}>Name Poem</li>
            </Link>
            
            <Link href="/work/standup-comedy">
                <li className={styles.project}>Standup</li>
            </Link>
            <Link href="/work/periodical">
                <li className={styles.project}>Periodical</li>
            </Link>
            <Link href="/work/argentine-soccer-announcer">
                <li className={styles.project}>Argentine Soccer Announcer Looking at a Tree</li>
            </Link>
            <Link href="/work/bronsons-honey">
                <li className={styles.project}>Bronsons Honey</li>
            </Link>

            <Link href="/work/remember-kramer">
                <li className={styles.project}>Remember Kramer? From Seinfeld?</li>
            </Link>
            <Link href="/work/bette-rman-screenplay">
                <li className={styles.project}>Better Man Screenplay</li>
            </Link>
        </ul>
    )
}