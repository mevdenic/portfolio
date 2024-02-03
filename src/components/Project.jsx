import styles from "./Projects.module.css";
export function Project({ name, children, image }) {
    return (
        <section className={styles.project}>
            <div>
                <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>{name}</h2>
                <div className={styles.projectContainer}>
                    <div className={styles.description}>{children}</div>
                    <div className={styles.imgWrapper}>
                        <img src={image} alt={image} className={styles.projectImg} />
                    </div>
                </div>
            </div>
        </section>
    );
}
