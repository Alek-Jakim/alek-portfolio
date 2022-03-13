import React from "react"
import styles from "./Projects.module.css"
import data from "../../data/projects.json"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
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
                    autoplay={{ delay: 2000, pauseOnMouseEnter: false, disableOnInteraction: false }}
                    speed={2000}
                    className={styles["p-swiper"]}
                >
                    {
                        data && data.map((project, idx) => (
                            <SwiperSlide key={idx} className={styles["p-project-slide"]}>
                                <div className={styles["p-project-card"]}>
                                    <h3>{project.title}</h3>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Projects