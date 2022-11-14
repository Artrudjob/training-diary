import React, {FC} from "react";
import styles from "./title.module.css";

const Title: FC = () => {

    return (
        <section className={styles.title}>
            <h1 className={styles.title__master}>MAKE YOURSELF</h1>
        </section>
    )
}

export default Title;