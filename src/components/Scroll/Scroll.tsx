import React, { useState } from "react"
import styles from "./Scroll.module.css"
import { AiFillFire, AiTwotoneSetting, AiFillPhone, AiFillBulb } from "react-icons/ai"
import { Link } from "react-scroll"
import { MdDoubleArrow } from "react-icons/md"

const Scroll = () => {

    const [open, setOpen] = useState<boolean>(false);


    function handleSidebar() {

        let burgerIcon: any = document.querySelector(".Scroll_s-burger__HChR-");

        let intro: any = document.getElementById("s-intro");
        let about: any = document.getElementById("s-about");
        let projects: any = document.getElementById("s-projects");
        let contact: any = document.getElementById("s-contact");


        if (!open) {

            if (intro && about && projects && contact) {
                intro.style.left = "-10px";
                about.style.left = "-10px";
                projects.style.left = "-10px";
                contact.style.left = "-10px";
            }
            setOpen(true);
            if (burgerIcon) {
                burgerIcon.style.transform = "rotate(180deg)";
            }
        } else {
            if (intro && about && projects && contact) {
                intro.style.left = "-100px";
                about.style.left = "-100px";
                projects.style.left = "-100px";
                contact.style.left = "-100px";
            }
            if (burgerIcon) {
                burgerIcon.style.transform = "rotate(360deg)";
            }
            setOpen(false);
        }

    }

    return (
        <div className={styles["s"]}>

            <MdDoubleArrow className={styles["s-burger"]} onClick={handleSidebar} />



            <div className={styles["s-intro"]} id="s-intro">
                <Link to="intro" smooth={true} className={styles["s-link"]}>
                    <AiFillFire className={styles["s-icon"]} />
                </Link>
            </div>

            <div className={styles["s-about"]} id="s-about">
                <Link to="about" smooth={true} className={styles["s-link"]}>
                    <AiTwotoneSetting className={styles["s-icon"]} />
                </Link>
            </div>

            <div className={styles["s-projects"]} id="s-projects">
                <Link to="projects" smooth={true} className={styles["s-link"]}>
                    <AiFillBulb className={styles["s-icon"]} />
                </Link>
            </div>

            <div className={styles["s-contact"]} id="s-contact">
                <Link to="contact" smooth={true} className={styles["s-link"]}>
                    <AiFillPhone className={styles["s-icon"]} />
                </Link>
            </div>

        </div>
    )
}

export default Scroll