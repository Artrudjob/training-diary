import React, {FC} from "react";
import styles from "./button.module.css";

type TProps = {
    text: string,
    refBtn:  any,
    click: () => void;
}


const Button: FC<TProps> = ({text, refBtn, click}) => {

    return (
        <button className={styles.button} type={"button"} ref={refBtn} onClick={click}>{text}</button>
    )
}

export default Button;