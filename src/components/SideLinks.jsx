import styles from "./SideLinks.module.css";

export function SideLinks() {
    return (
        <aside className={styles.sideContainer}>
            <a
                href="https://github.com/mevdenic"
                target="_blank"
                rel="noreferrer"
                className={`${styles.sideLink} ${styles.sideLink1}`}
            >
                <img src="/GH_icon.png" alt="github icon" className={styles.images} />
            </a>
            <a href="#contact" className={`${styles.sideLink} ${styles.sideLink2}`}>
                <img src="/mail_icon.png" alt="mail icon" className={styles.images} />
            </a>
            <a
                href="Mihael_Evđenić_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className={`${styles.sideLink} ${styles.sideLink3}`}
            >
                <img src="/resume_icon.png" alt="resume icon" className={styles.images} />
            </a>
        </aside>
    );
}
