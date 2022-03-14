import React from "react"
import styles from "./Projects.module.css"
import data from "../../data/projects.json"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { generateIcon } from "../../utils/generateIcon"
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"


const Projects = () => {
    return (
        <div className={styles["p"]}>
            <div className={styles["p-wrapper"]}>
                <h2 className={styles["p-title"]}>My Projects</h2>
                <div className={styles["p-divide"]}></div>
                <p className={styles["p-text"]}>Check out some of the stuff I've made</p>
            </div>

            <div className={styles["p-swiper-wrap"]}>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    // navigation={{ currentClass: styles.pagination }}
                    autoplay={{ delay: 1500, pauseOnMouseEnter: true, disableOnInteraction: false }}
                    speed={1500}
                    className={styles["p-swiper"]}
                >
                    {
                        data && data.map((project, idx) => (
                            <SwiperSlide key={idx} className={styles["p-project-slide"]}>
                                <a href={project.projectLink} style={{ color: "#fff", textDecoration: "none" }}>
                                    <div className={styles["p-project-card"]}>
                                        <div className={styles["card"]}>
                                            <div className={styles["layer"]}>

                                            </div>
                                            <div className={styles["content"]}>
                                                <p>{project.desc}</p>
                                                <div className={styles["icon"]}>
                                                    {generateIcon(project.icon)}
                                                </div>
                                                <div className={styles["details"]}>
                                                    <h2> {project.title} <br /> <span>{project.stack}</span></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Projects