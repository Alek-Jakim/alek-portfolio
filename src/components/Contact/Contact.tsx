import { useRef, FormEvent, MutableRefObject } from "react"
import styles from "./Contact.module.css"
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md"
import emailjs from '@emailjs/browser';


const Contact = () => {


    const formRef: MutableRefObject<any> = useRef<any>();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // emailjs.sendForm("service_etpq813", "template_skggm4r", formRef.current, "-34l5x0LaGFmojXq6")
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    }


    return (
        <div className={styles["c"]}>
            <div className={styles["c-left"]}>
                <h3 className={styles["c-title"]}>Let's Get In Touch</h3>
                <div className={styles["c-contact"]}>
                    <div className={styles["c-contact-row"]}>
                        <MdPhone className={styles["c-icon"]} />
                        <p className={styles["c-contact-info"]}>+49 0170 5878798</p>
                    </div>
                    <div className={styles["c-contact-row"]}>
                        <MdEmail className={styles["c-icon"]} />
                        <p className={styles["c-contact-info"]}>alek.jakimovski1@gmail.com</p>
                    </div>
                    <div className={styles["c-contact-row"]}>
                        <MdLocationOn className={styles["c-icon"]} />
                        <p className={styles["c-contact-info"]}>Grüner Weg 41, 53175 Bonn, Friesdorf</p>
                    </div>
                </div>
            </div>

            <div className={styles["c-right"]}>
                <h3 className={styles["c-right-title"]}>Send me a message below!</h3>
                <form ref={formRef} className={styles["c-form"]} onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles["c-form-wrap"]}>
                        <input type="text" placeholder="Name" className={styles["c-input"]} name="user_name" />
                        <input type="text" placeholder="Subject" className={styles["c-input"]} name="user_subject" />
                        <input type="email" placeholder="Email" className={styles["c-input"]} name="user_email" />
                    </div>
                    <textarea name="message" className={styles["c-input-text"]} placeholder="Message..."></textarea>
                    <button type="submit" className={styles["c-btn"]}>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Contact