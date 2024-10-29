import styles from "./page.module.css";
import headshot from "./headshot.png"
import Image from 'next/image';


export default function Header() {
    return (
        <div className={styles.header}>
            <div>
                Eytan Boclin
                <br></br>
                Jefe
            </div>
            <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
            </div>
            <div className={styles.contact}>CONTACT INFO<br></br>
                eytaboclin@gmail.com <br></br>
                Instagram.com/eytan
            </div>
            <div className={styles.headshot}>
                <div>
                <Image
                    src={headshot}
                    width= {162}
                />


                </div>

            </div>

        


        </div>
        
    )

}