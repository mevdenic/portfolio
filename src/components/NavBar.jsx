import { useState } from "react";
import { Logo } from "./Logo";
import styles from "./NavBar.module.css";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <nav id="nav" className={styles.nav}>
            <Logo />
            <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
                <li onClick={closeMenu}>
                    <a href="#about">About</a>
                </li>
                <li onClick={closeMenu}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={closeMenu}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className={styles.burger} onClick={toggleMenu}>
                <div className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></div>
                <div className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></div>
                <div className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></div>
            </div>
        </nav>
    );
}
