import styles from "./About.module.css";
import { LinkButton } from "./LinkButton";

export function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.aboutWrapper}>
                <h2 style={{ textAlign: "center" }}>About</h2>
                <p className={styles.aboutParagraph}>
                    I am a fifth year engineering student and an aspiring <span>React.js</span>{" "}
                    developer.
                </p>
                <p className={styles.aboutParagraph}>
                    With no prior work experience in this field, I decided to start learning
                    frontend development in my free time by studying courses and building simple
                    projects to showcase my skills.
                </p>
                <p className={styles.aboutParagraph}>
                    Technical skills I possess: <span>HTML5</span>, <span>CSS3</span>,{" "}
                    <span>JavaScript (ES6+)</span>, <span>React.js</span>,<br></br>{" "}
                    <span>J-Query</span>, <span>Material-UI</span>, <span>Git</span>,{" "}
                    <span>GitHub</span>.
                </p>
                <p className={styles.aboutParagraph}>
                    My current plan is to work as a <span>student frontend developer</span>, so I
                    can keep learning and developing my skills and then eventually become a
                    full-time frontend and mobile developer.
                </p>
                <LinkButton margin={"1.5rem auto 0 auto"} href={"/Mihael_Evđenić_resume.pdf"}>
                    Download CV
                </LinkButton>
            </div>
        </section>
    );
}
