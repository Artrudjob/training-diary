import React, {FC} from "react";
import styles from "./menu.module.css";
import {NavLink} from "react-router-dom";

type TProps = {
    refMenu: any
}

const Menu: FC<TProps> = ({refMenu}): JSX.Element => {

    return (
        <div className={styles.menu__container} ref={refMenu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__text}>
                    <NavLink to={"/trainingDiary"} className={styles.menu__link}>Training diary</NavLink>
                </li>
                <li className={styles.menu__text}>
                    <a className={styles.menu__link}>Body measurements</a>
                </li>
            </ul>
        </div>
    );

};

export default Menu;