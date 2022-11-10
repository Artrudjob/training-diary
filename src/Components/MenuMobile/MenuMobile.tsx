import React, {FC} from "react";
import styles from "./menuMobile.module.css";
import {NavLink} from "react-router-dom";

type TProps = {
    refMenu: any
}

const MenuMobile: FC<TProps> = ({refMenu}) => {

    return (
        <>
            <div className={styles.menuMobile__container} ref={refMenu}>
                <ul className={styles.menuMobile__list}>
                    <li className={styles.menuMobile__text}>
                        <NavLink to={"/trainingDiary"} className={styles.menuMobile__link}>Training diary</NavLink>
                    </li>
                    <li className={styles.menuMobile__text}>
                        <a className={styles.menuMobile__link}>Body measurements</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MenuMobile;