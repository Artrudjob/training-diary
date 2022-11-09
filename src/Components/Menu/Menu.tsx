import React, {FC, useRef, useState} from "react";
import styles from "./menu.module.css";
import {useOnClickOutside} from "../../services/hooks";

type TProps = {
    toggleMenu: (open: void) => void,
}

const Menu: FC<TProps> = ({toggleMenu}): JSX.Element => {

    const [isOpen, setOpen] = useState<boolean>(false);

    const ref = useRef(null);
    const refBtn = useRef(null);

    useOnClickOutside(refBtn, ref, () => setOpen(false));

    return (
        <>
            <button ref={refBtn} className={styles.menu__button} type={"button"} onClick={() => toggleMenu(setOpen(!isOpen))}>MENU</button>
            {isOpen &&
                <div className={styles.menu__container} ref={ref}>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__text}><a className={styles.menu__link}>Training diary</a></li>
                        <li className={styles.menu__text}><a className={styles.menu__link}>Body measurements</a></li>
                    </ul>
                </div>}
        </>
    );

};

export default Menu;