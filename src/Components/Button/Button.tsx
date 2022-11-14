import React, {FC} from "react";
import styles from "./button.module.css";

type TProps = {
    text: string,
    color: string
    refBtn:  any,
    click: () => void;
}


const Button: FC<TProps> = ({text, color, refBtn, click}) => {

    return (
        <button className={styles.button} style={{color: `${color}`}} type={"button"} ref={refBtn} onClick={click}>{text}</button>
    )
}

export default Button;