import React, {FC, useRef, useState} from "react";
import styles from "./menuMobile.module.css";
import {useOnClickOutside} from "../../services/hooks";

type TProps = {
    toggleMenu: (open: void) => void,
}

const MenuMobile: FC<TProps> = ({toggleMenu}) => {

    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useRef(null);
    const refBtn = useRef(null);

    useOnClickOutside(refBtn, ref, () => setOpen(false));

    return (
        <>
            <button ref={refBtn} className={styles.menuMobile__button} onClick={() => toggleMenu(setOpen(!isOpen))} type={"button"}>MENU</button>
            {isOpen &&
                <div className={styles.menuMobile__container} ref={ref}>
                    <ul className={styles.menuMobile__list}>
                        <li className={styles.menuMobile__text}><a className={styles.menuMobile__link}>Training diary</a></li>
                        <li className={styles.menuMobile__text}><a className={styles.menuMobile__link}>Body measurements</a></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default MenuMobile;