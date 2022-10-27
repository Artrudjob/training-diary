import React, {FC} from "react";
import styles from "./header.module.css";

type TProps = {
    miniHeader: boolean
}

const Header: FC<TProps> = ({miniHeader}): JSX.Element => {

    return (
        <header className={styles.header}>
            <h1 className={miniHeader? styles.header__title_mini : styles.header__title}>MAKE YOURSELF</h1>
        </header>
    );

};

export default Header;