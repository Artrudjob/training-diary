import React, {FC} from "react";
import styles from "./footer.module.css";
import logo from "../../assets/logomini.png";

const Footer: FC = (): JSX.Element => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__grid}>
                <div className={styles.footer__about}>
                    <a href={"#"} className={styles.footer__headline}>ABOUT</a>
                </div>
                <div style={{backgroundImage: `url(${logo})`}} className={styles.footer__logo}></div>
                <div className={styles.footer__container}>
                    <div className={styles.footer__navigation}>
                        <p className={`${styles.footer__headline} ${styles.footer__connect}`}>CONNECT:</p>
                        <nav className={styles.footer__links}>
                            <a className={styles.footer__link}
                               href={"https://vk.com/id153314180"}>Vkontakte</a>
                            <a className={styles.footer__link}
                               href={"https://instagram.com/artykrsk?igshid=YmMyMTA2M2Y="}>Instagram</a>
                            <p className={styles.footer__text}>Artrudjob@yandex.ru</p>
                        </nav>
                    </div>
                    <p className={styles.footer__headline}>Copyright Artyom Rudenko</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;