import styles from "./LinkButton.module.css";

export function LinkButton({ children, width, margin, color, href, target = "blank" }) {
    return (
        <a
            target={target}
            href={href}
            className={styles.btn}
            style={{ width: width, margin: margin, backgroundColor: color }}
        >
            {children}
        </a>
    );
}
