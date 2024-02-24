import { LinkButton } from "./LinkButton";
import styles from "./Welcome.module.css";

export function Welcome() {
    return (
        <section id="welcome" className={styles.about}>
            <div className={styles.introduction}>
                <h1>Hi, I&apos;m Mihael.</h1>
                <h2>
                    I am a <span style={{ color: "var(--red)", fontWeight: "bold" }}>Software</span>{" "}
                    Developer from Zagreb.
                </h2>
                <div className={styles.container}>
                    <LinkButton href={"#projects"} target={""}>
                        View Projects
                    </LinkButton>
                    <div className={styles.iconContainer}>
                        <a
                            href="https://github.com/mevdenic"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.iconWrapper}
                        >
                            <img src="/GH_icon.png" alt="github icon" className={styles.images} />
                        </a>

                        <a href="#contact" rel="noreferrer" className={styles.iconWrapper}>
                            <img src="/mail_icon.png" alt="mail icon" className={styles.images} />
                        </a>
                        <a
                            href="Mihael_Evđenić_resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.iconWrapper}
                        >
                            <img
                                src="/resume_icon.png"
                                alt="resume icon"
                                className={styles.images}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%" }} className={styles.mainImgBorder}>
                <img src="/prog_image.png" alt="programmer image" className={styles.mainImage} />
            </div>
        </section>
    );
}
