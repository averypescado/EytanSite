import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header";
import Menu from "./Menu";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.head}>
          <Header/>

        </div>
      <div className={styles.meat}>
        <Menu />
        <div className={styles.content}>
          <div>Dsecription</div>
          <div className={styles.videoContainer}>
            <iframe 
              className={styles.videoframe}
              src="https://www.youtube.com/embed/iNHRw8nvm28"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      </main>
    </div>
  );
}
