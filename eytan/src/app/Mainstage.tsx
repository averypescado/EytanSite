import styles from "./page.module.css";

export default function Mainstage({project}) {
    switch(project) {
        case "R word":
            return (
                <div className={styles.content}>
                    <div>Description</div>
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
                    <div>Description</div>
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
                    <div>
                        Description
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



                    </div> 
                </div>
        )

        case "Hoop Dreams 2":
            return (
                <div className={styles.content}>
                    <div>
                        Description
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

    }
    


}