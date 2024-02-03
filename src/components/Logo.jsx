import styles from "./Logo.module.css";
export function Logo() {
    return (
        <a href="#welcome" className={styles.logoWrapper}>
            <img src="/signature.png" alt="signature" className={styles.logo} />
        </a>
    );
}
