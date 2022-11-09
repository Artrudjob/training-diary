import React, {FC} from "react";
import styles from "./backgroundImage.module.css"
import backgroundImage from "../../assets/arnoldShvartsenegger.jpg";

const BackgroundImage: FC = () => {

    return (
        <div className={styles.backgroundImage} style={{backgroundImage: `url(${backgroundImage})`}}></div>
    )
}

export default BackgroundImage