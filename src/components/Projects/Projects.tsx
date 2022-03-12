import React from 'react'
import styles from "./Projects.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
    return (
        <div className={styles["p"]}>
            <div className={styles["p-wrapper"]}>
                <h2 className={styles["p-title"]}>My Projects</h2>
                <div className={styles["p-divide"]}></div>
                <p className={styles["p-text"]}>Check out some of the stuff I've made</p>
            </div>

            <div className={styles["p-project-wrap"]}>
                <Carousel>
                    <div>
                        <p>Legend 1</p>
                    </div>
                    <div>
                        <p>Legend 2</p>
                    </div>
                    <div>
                        <p>Legend 3</p>
                    </div>
                </Carousel>
            </div>

        </div>
    )
}

export default Projects