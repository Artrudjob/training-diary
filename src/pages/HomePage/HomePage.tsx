import React from "react";
import styles from "./homePage.module.css";
import BackgroundVideo from "../../Components/BackgroundVideo/BackgroundVideo";
import Menu from "../../Components/Menu/Menu";

class HomePage extends React.Component<any, any> {
    render() {
        return (
            <div className={styles.homePage}>
                <BackgroundVideo />
                <Menu />
            </div>
        )
    }
};

export default HomePage;