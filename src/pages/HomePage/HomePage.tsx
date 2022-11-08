import React, {FC, useEffect, useState} from "react";
import styles from "./homePage.module.css";
import BackgroundVideo from "../../Components/BackgroundVideo/BackgroundVideo";
import Menu from "../../Components/Menu/Menu";
import Citation from "../../Components/Citation/Citation";
import backgroundImage from "../../assets/arnoldShvartsenegger.jpg"

const HomePage: FC = (): JSX.Element => {

    const [innerWidth, setInnerWidth] = useState<number>(0);

    useEffect(() => {
        setInnerWidth(window.innerWidth);
    });

    return (
        <div className={styles.homePage}>
            {innerWidth > 660 ?
                <BackgroundVideo/>
                :
                <div className={styles.homePage_background_image} style={{backgroundImage: `url(${backgroundImage})`}}></div>
            }
            <Menu/>
            <Citation/>
        </div>
    )
}

export default HomePage;