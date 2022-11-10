import React, {FC, useRef, useState} from "react";
import styles from "./menuMobile.module.css";
import {useOnClickOutside} from "../../services/hooks";
import {NavLink} from "react-router-dom";
import Button from "../Button/Button";

const MenuMobile: FC = () => {

    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useRef(null);
    const refBtn = useRef(null);

    useOnClickOutside(refBtn, ref, () => setOpen(false));

    return (
        <>
            <div className={styles.menuMobile__btnBox}>
                <Button text={"MENU"} refBtn={refBtn} click={() => setOpen(!isOpen)}/>
            </div>
            {isOpen &&
                <div className={styles.menuMobile__container} ref={ref}>
                    <ul className={styles.menuMobile__list}>
                        <li className={styles.menuMobile__text}><NavLink to={"/trainingDiary"} className={styles.menuMobile__link}>Training diary</NavLink></li>
                        <li className={styles.menuMobile__text}><a className={styles.menuMobile__link}>Body measurements</a></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default MenuMobile;