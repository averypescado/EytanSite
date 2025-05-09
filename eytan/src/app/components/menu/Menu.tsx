// Updated Menu.jsx with className prop
import styles from "./Menu.module.css";
import Link from "next/link";

interface MenuProps {
    className: string;
  }

export default function Menu({ className}: MenuProps ) {
    return (
        <ul className={`${styles.list} ${className || ''}`}> 
            <Link href="/work/HoopDreams2">
                <li className={styles.project}>
                    Hoop Dreams 2
                </li>
            </Link>
            <Link href="/work/HoopDreams3D">
                <li className={styles.project}>Hoop Dreams 3D</li>
            </Link>

            <Link href="/work/TheToyotaProblem">
                <li className={styles.project}>The Toyota Problem</li>
            </Link>
            
            <Link href="/work/RWordIsBack">
                <li className={styles.project}>The R word Is Back</li>
            </Link>

            <Link href="/work/NamePoem">
                <li className={styles.project}>Name Poem</li>
            </Link>
            
            <Link href="/work/Standup">
                <li className={styles.project}>Standup</li>
            </Link>
            <Link href="/work/Periodical">
                <li className={styles.project}>Periodical</li>
            </Link>
            <Link href="/work/ArgentineSoccerAnnouncer">
                <li className={styles.project}>Argentine Soccer Announcer Looking at a Tree</li>
            </Link>
            <Link href="/work/Bronsons">
                <li className={styles.project}>Bronsons Honey</li>
            </Link>

            <Link href="/work/RememberKramer">
                <li className={styles.project}>Remember Kramer? From Seinfeld?</li>
            </Link>
            <Link href="/work/BettermanScreenplay">
                <li className={styles.project}>Better Man Screenplay</li>
            </Link>
        </ul>
    )
}