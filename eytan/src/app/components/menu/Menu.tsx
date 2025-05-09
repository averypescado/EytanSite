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
            <Link href="/work/hoodDreams3D">
                <li className={styles.project}>Hoop Dreams 3D</li>
            </Link>

            <Link href="/work/thetoyotatroblem">
                <li className={styles.project}>The Toyota Problem</li>
            </Link>
            
            <Link href="/work/rwordisback">
                <li className={styles.project}>The R word Is Back</li>
            </Link>

            <Link href="/work/namepoem">
                <li className={styles.project}>Name Poem</li>
            </Link>
            
            <Link href="/work/standup">
                <li className={styles.project}>Standup</li>
            </Link>
            <Link href="/work/periodical">
                <li className={styles.project}>Periodical</li>
            </Link>
            <Link href="/work/argentinesoccerannouncer">
                <li className={styles.project}>Argentine Soccer Announcer Looking at a Tree</li>
            </Link>
            <Link href="/work/bronsons">
                <li className={styles.project}>Bronsons Honey</li>
            </Link>

            <Link href="/work/rememberkramer">
                <li className={styles.project}>Remember Kramer? From Seinfeld?</li>
            </Link>
            <Link href="/work/bettermanscreenplay">
                <li className={styles.project}>Better Man Screenplay</li>
            </Link>
        </ul>
    )
}