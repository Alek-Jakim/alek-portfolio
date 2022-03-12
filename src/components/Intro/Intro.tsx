import React from "react"
import styles from "./Intro.module.css"
import me from "../../img/me.png"
import Scroll from "../Scroll/Scroll"

const Intro = () => {
    return (
        <div className={styles["i"]}>
            <div className={styles["i-left"]}>
                <div className={styles["i-left-wrapper"]}>
                    <h2 className={styles["i-intro"]}>Hello, My name is</h2>
                    <h1 className={styles["i-name"]}>Aleksandar</h1>
                    <div className={styles["i-title"]}>
                        <div className={styles["i-title-wrapper"]}>
                            <div className={styles["i-title-item"]}>Frontend Developer</div>
                            <div className={styles["i-title-item"]}>Backend Developer</div>
                            <div className={styles["i-title-item"]}>UI/UX Designer</div>
                            <div className={styles["i-title-item"]}>Language Enthusiast</div>
                            <div className={styles["i-title-item"]}>Martial Artist</div>
                        </div>
                    </div>
                    <p className={styles["i-desc"]}>
                        I create and develop stylish & modern websites, web services and
                        online stores.
                    </p>
                </div>

                <Scroll />

            </div>
            <div className={styles["i-right"]}>
                <div className={styles["i-bg"]}></div>
                <img src={me} alt="me" className={styles["i-img"]} />
            </div>
        </div>
    )
}

export default Intro