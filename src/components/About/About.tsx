import React from "react"
import styles from "./About.module.css"
import about from "../../img/about-g.jpg"
import { SiMongodb, SiMysql, SiCss3, SiHtml5, SiNodedotjs, SiReact, SiNextdotjs, SiJavascript, SiGit } from "react-icons/si"

const About = () => {
    return (
        <div className={styles["a"]} id="about">
            <div className={styles["a-left"]}>
                <img src={about} alt="about" className={styles["a-img"]} />
            </div>


            <div className={styles["a-right"]}>
                <div className={styles["a-right-top"]}>
                    <h2 className={styles["a-title-top"]}>About Me</h2>
                    <p className={styles["a-desc"]}>My journey as a web developer started years 2 ago, when I decided to make a career change. I haven't looked back since then and I have worked on several personal & professional projects. I'm particularly fond of the JavaScript ecosystem and enjoy working with modern web technologies. Learning new languages and martial arts is what I do when I'm not coding.<br /><br /><span className={styles["a-ps"]}>P.S. The guitar on the left is just for show, I don't know how to play it.</span></p>
                </div>
                <div className={styles["a-divide"]}>&nbsp;</div>
                <div className={styles["a-right-bottom"]}>
                    <h2 className={styles["a-title-bottom"]}>Things I'm Good At</h2>
                    <div className={styles["a-skills"]}>
                        <div className={styles["a-skill-row"]}>
                            <SiHtml5 title="HTML5" className={styles["a-html"]} />
                            <SiCss3 title="CSS3" className={styles["a-css"]} />
                            <SiJavascript title="JavaScript" className={styles["a-js"]} />
                        </div>
                        <div className={styles["a-skill-row"]}>
                            <SiReact title="React.js" className={styles["a-react"]} />
                            <SiNextdotjs title="Next.js" className={styles["a-next"]} />
                            <SiNodedotjs title="Node.js" className={styles["a-node"]} />
                        </div>
                        <div className={styles["a-skill-row"]}>
                            <SiMysql title="MySQL" className={styles["a-mysql"]} />
                            <SiMongodb title="MongoDB" className={styles["a-mongo"]} />
                            <SiGit title="Git" className={styles["a-git"]} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About