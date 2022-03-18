import React, { useState } from "react"
import styles from "./Scroll.module.css"
import { AiFillFire, AiTwotoneSetting, AiFillPhone, AiFillBulb } from "react-icons/ai"
import { Link } from "react-scroll"
import { MdDoubleArrow } from "react-icons/md"

const Scroll = () => {

    const [open, setOpen] = useState<boolean>(false);


    function handleSidebar() {

        let burgerIcon: any = document.querySelector(".Scroll_s-burger__HChR-");

        let sideItem = document.querySelector(".Scroll_s__9nuif")?.children;
        let arr: any = [].slice.call(sideItem);
        arr.shift();

        if (!open) {
            arr.forEach((item: any) => {
                item.style.left = "-5px";
            });
            setOpen(true);
            burgerIcon.style.transform = "rotate(180deg)";
            console.log(burgerIcon)
        } else {
            arr.forEach((item: any) => {
                item.style.left = "-100px"
            });
            burgerIcon.style.transform = "rotate(360deg)";
            setOpen(false);
        }

    }

    return (
        <div className={styles["s"]}>

            <MdDoubleArrow className={styles["s-burger"]} onClick={handleSidebar} />



            <div className={styles["s-intro"]}>
                <Link to="intro" smooth={true} className={styles["s-link"]}>
                    <AiFillFire className={styles["s-icon"]} />
                </Link>
            </div>

            <div className={styles["s-about"]}>
                <Link to="about" smooth={true} className={styles["s-link"]}>
                    <AiTwotoneSetting className={styles["s-icon"]} />
                </Link>
            </div>

            <div className={styles["s-projects"]}>
                <Link to="projects" smooth={true} className={styles["s-link"]}>
                    <AiFillBulb className={styles["s-icon"]} />
                </Link>
            </div>

            <div className={styles["s-contact"]}>
                <Link to="contact" smooth={true} className={styles["s-link"]}>
                    <AiFillPhone className={styles["s-icon"]} />
                </Link>
            </div>

        </div>
    )
}

export default Scroll