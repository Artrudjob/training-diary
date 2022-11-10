import React, {FC, useRef, useState} from "react";
import styles from "./menu.module.css";
import {useOnClickOutside} from "../../services/hooks";
import {NavLink} from "react-router-dom";
import Button from "../Button/Button";

const Menu: FC = (): JSX.Element => {

    const [isOpen, setOpen] = useState<boolean>(false);

    const ref = useRef(null);
    const refBtn = useRef(null);

    useOnClickOutside(refBtn, ref, () => setOpen(false));

    return (
        <>
            <div className={styles.menu__btnBox}>
                <Button text={"MENU"} refBtn={refBtn} click={() => setOpen(!isOpen)} />
            </div>
            {isOpen &&
                <div className={styles.menu__container} ref={ref}>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__text}><NavLink to={"/trainingDiary"} className={styles.menu__link}>Training diary</NavLink></li>
                        <li className={styles.menu__text}><a className={styles.menu__link}>Body measurements</a></li>
                    </ul>
                </div>}
        </>
    );

};

export default Menu;