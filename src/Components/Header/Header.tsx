import React from "react";
import styles from "./header.module.css";

class Header extends React.Component<any, any> {
    render() {
        return (
            <header className={styles.header}>
                    <h1 className={styles.header__title}>MAKE YOURSELF</h1>
            </header>
        );
    }
};

export default Header;