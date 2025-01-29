import styles from "./page.module.css";
import Image from 'next/image';
import poster from "./poster.jpg";
import headshot from "./headshot.png";
import periodical from "./periodical.png"
import back from "./back.png"

interface MainstageProps {
    project: string;  // or use a more specific type like enum if you have fixed values
  }


export default function Mainstage({ project }: MainstageProps) {
    switch(project) {
        case "begin":
                return (
                    <div className={styles.content}>
                        <div className={styles.flex}>
                        <div className={styles.box}>
                            <div> Front </div>
                            <div className={styles.imagewrapper}>
                                <Image
                                    src={headshot}
                                    width= {300}
                                    alt="Poster"
                                />
                            </div>
                        </div>
                        <div className={styles.box}>
                        <div> Back </div>
                            <div className={styles.imagewrapper}>

                                <Image
                                    src={back}
                                    width= {300}
                                    alt="Poster"
                                />
                            </div>
                        </div>



                        </div>
                        


                            

                    </div>
                )



        case "R word":
            return (
                <div className={styles.content}>

                    <div className={styles.describe}>The R Word Is Back:<br></br>
                    Investigating the resurgence of the R word -- retail. Made with Ben Gauthier.</div>
                        <div className={styles.videoContainer}>
                            <iframe 
                                className={styles.videoframe}
                                src="https://www.youtube.com/embed/iNHRw8nvm28"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                </div>
            )
        case "Bronsons":
            return (
                <div className={styles.content}>
                    <div className={styles.describe}>Bronsons Honey:<br></br>
                    A sketch I made the first year out of college, can you tell? Directed by Natalie Price. Featuring Natalie Rotter-Laitman, Daniel Liu, Macy Atkinson. 
</div>
                        <div className={styles.videoContainer}>
                            <iframe 
                                className={styles.videoframe}
                                src="https://www.youtube.com/embed/GUv1NWkpcqg"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                </div>
            )
        case "Hoop Dreams 3D":
            return (
                <div className={styles.content}>
                    <div className={styles.describe}>Hoop Dreams 3D:<br></br>
                        The sequel to Hoop Dreams 2. Liam&apos;s priorities shift from basketball to his new passion: acting. Eytan sets out to document his friend&apos;s journey, this time keen on authority and control. 2024. Co-directed, written, and starring with Liam Klinkenberg. 
                    </div>
                        <div className={styles.videoContainer}>
                            <iframe 
                                className={styles.videoframe}
                                src="https://www.youtube.com/embed/6L-tcbPPB40?si=saxmRMtQwiIoHXeu" 
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                       
                    <div>
                        <div className={styles.poster}>
                            <Image
                                src={poster}
                                width= {400}
                                alt="Poster"
                                />

                            <div>Poster by Tyler Rubenfeld</div>
                        </div>




                    </div> 
                </div>
        )

        case "Hoop Dreams 2":
            return (
                <div className={styles.content}>
                    <div className={styles.describe}>Hoop Dreams 2:<br></br>
                    Mockumentary about a young man who, after surviving a coma suffered on a construction site, uses his new lease on life to embark on a quixotic journey: playing in the NBA. 2020. Co-directed with Liam Klinkenberg. 
 
                    </div>
                        <div className={styles.videoContainer}>
                            <iframe 
                                className={styles.videoframe}
                                src="https://player.vimeo.com/video/448416507"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen

                            />
                        </div>
                    <div>



                    </div> 
                </div>
        )
        case "30 Minutes":
            return (
                <div className={styles.content}>
                    <div>
                        Description
                    </div>
                        <div className={styles.videoContainer}>
                        <iframe 
                            className={styles.videoframe}
                            src="https://player.vimeo.com/video/662514622"
                            title="Vimeo video player"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                        </div>
                    <div>



                    </div> 
                </div>
        )
        case "standup":
            return (
                <div className={styles.content}>

                    <div className={styles.describe}>Standup Clip<br></br>
                    Opening for Natalie Rotter-Laitman at Dynasty Typewriter 
</div>
                        <div className={styles.videoContainer}>
                            <iframe 
                                className={styles.videoframe}
                                src="https://www.youtube.com/embed/GeFLF0mkpK4?si=GpirxnV79nX9D4tw"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                </div>
            )
            case "oly":
                return (
                    <div className={styles.content}>
                        <div className={styles.describe}>2 Olympic Sports You Already Knew Existed
                        :<br></br>
                        A sketch I made the first year out of college, can you tell? Directed by Natalie Price. Featuring Natalie Rotter-Laitman, Daniel Liu, Macy Atkinson. 
    </div>
                            <div className={styles.videoContainer}>
                                
                                

                            </div>
                    </div>
                )

            case "Periodical":
                return (
                    <div className={styles.content}>
                        <div className={styles.describe}>Periodical
                        :<br></br>
                        A zine I ran via email and leaving print copies in coffee shops around New York and LA. In the last issue, super-director Damien Chazelle buys the zine and turns it into multi-media conglomerate Periodical Inc, Incorporated. Replete with a website befitting any international corporation.

    </div>
                            <div className={styles.videoContainer}>
                                <Image
                                
                                    src={periodical}
                                    width={1600}
                                    height={900}
                                    alt="Poster"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'contain'
                                    }}
                                />  
                            </div>
                            <div className={styles.poster}>
                            <a href="https://www.periodicalincinc.com/issue_pdfs/issue_1.pdf">
                                <Image
                                    src={poster}
                                    width= {300}
                                    alt="Poster"
                                    />
                            </a>
                            <a href="https://www.periodicalincinc.com/issue_pdfs/issue_1.pdf">
                                <Image
                                    src={poster}
                                    width= {300}
                                    alt="Poster"
                                    />
                            </a>
                            <a href="https://www.periodicalincinc.com/issue_pdfs/issue_1.pdf">
                                <Image
                                    src={poster}
                                    width= {300}
                                    alt="Poster"
                                    />
                            </a>

                        </div>


                            

                    </div>
                )

    }
    


}