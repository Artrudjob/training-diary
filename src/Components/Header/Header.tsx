import React, {FC} from "react";
import styles from "./header.module.css";
import {useAppSelector} from "../../services/hooks";
import {breakpoints} from "../../consts/consts";

type TProps = {
    miniHeader: boolean,
    invisibleHeader: boolean
}

const Header: FC<TProps> = ({miniHeader, invisibleHeader}): JSX.Element => {

    const selector = useAppSelector(state => state.innerWidthReducer);

    const sizeHeader = miniHeader? styles.header__title_mini : styles.header__title;
    const visibilityHeader = invisibleHeader && styles.header__invisible;

    return (
        <>
            {(selector > breakpoints.tablet) ?
                <header className={styles.header}>
                    <h1 className={`${sizeHeader} ${visibilityHeader}`}>MAKE YOURSELF</h1>
                </header>
                :
                <header className={styles.header_mobile_size}>
                    <h1 className={styles.header__title_mobile_size}>MAKE YOURSELF</h1>
                </header>
            }
        </>
    );

};

export default Header;