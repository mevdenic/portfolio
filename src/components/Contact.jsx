import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { useState } from "react";

export function Contact() {
    const [msgSent, setMsgSent] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_xu5x2jy", "template_4m4x1x6", form.current, "AtvBQzu5lrvUSPDeI")
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                    setMsgSent(true);
                    setTimeout(() => {
                        setMsgSent(false);
                    }, "5000");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section id="contact" className={styles.contact}>
            <div>
                <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Contact me</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={styles.inputContainer}>
                        <div>
                            <label>Name</label>
                            <input type="text" name="user_name" required />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="user_email" id="email" required />
                        </div>
                    </div>
                    <div className={styles.textareaContainer}>
                        <label>Message</label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            required
                        ></textarea>
                    </div>
                    <div style={{ display: "flex", width: "100%" }}>
                        {msgSent ? <div>Message sent.</div> : <div></div>}
                        <button>Send!</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
