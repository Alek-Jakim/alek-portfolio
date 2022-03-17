import React from "react"
import styles from "./Footer.module.css"
import { FaFacebook, FaGithub, FaLinkedinIn, FaXing } from "react-icons/fa"
import { Link } from "react-scroll"


const Footer = () => {

    return (
        <footer className={styles["f"]}>
            <div className={styles["f-icons"]}>
                <a href="https://www.facebook.com/alek.acko/" className={styles["f-icon-link"]}>
                    <FaFacebook className={styles["f-icon"]} />
                </a>
                <a className={styles["f-icon-link"]} href="https://www.linkedin.com/in/aleksandar-jakimovski/">
                    <FaLinkedinIn className={styles["f-icon"]} />
                </a>
                <a className={styles["f-icon-link"]} href="https://github.com/Alek-Jakim">
                    <FaGithub className={styles["f-icon"]} />
                </a>
                <a href="" className={styles["f-icon-link"]}>
                    <FaXing className={styles["f-icon"]} />
                </a>
            </div>
            <div className={styles["f-links"]}>
                <Link id="f-link-start" to="intro" smooth={true} duration={1000} className={styles["f-link"]}>
                    Start
                </Link>
                <span className={styles["f-link-divide"]}>&nbsp;</span>
                <Link id="f-link-about" to="about" smooth={true} duration={2000} className={styles["f-link"]}>
                    About
                </Link>
                <span className={styles["f-link-divide"]}>&nbsp;</span>
                <Link to="projects" smooth={true} duration={3000} className={styles["f-link"]}>
                    Projects
                </Link>
            </div>
        </footer>
    )
}

export default Footer