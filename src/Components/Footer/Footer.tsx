import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/logomini.png";

class Footer extends React.Component<any, any> {

    render() {
        return (
            <footer className={styles.footer}>
                <div className={styles.footer__flexbox}>
                    <div className={styles.footer__about}>
                        <a>ABOUT</a>
                    </div>
                    <div style={{backgroundImage: `url(${logo})`}} className={styles.footer__logo}></div>
                    <div className={styles.footer__container}>
                        <div>
                            <p>CONNECT:</p>
                            <nav className={styles.footer__navigation}>
                                <a className={styles.footer__link} href={"https://vk.com/id153314180"}>Vkontakte</a>
                                <a className={styles.footer__link} href={"https://instagram.com/artykrsk?igshid=YmMyMTA2M2Y="}>Instagram</a>
                                <p className={styles.footer__text}>Artrudjob@yandex.ru</p>
                            </nav>
                        </div>
                        <p>Copyright Artyom Rudenko</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;