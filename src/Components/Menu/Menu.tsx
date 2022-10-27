import React, {FC, useState} from "react";
import styles from "./menu.module.css";

const Menu: FC = (): JSX.Element => {

    const [isOpen, setOpen] = useState<boolean>(false);

    function clickButton() {
        !isOpen ? setOpen(true) : setOpen(false);
    }

    return (
        <>
            <button className={styles.menu__button} type={"button"} onClick={clickButton}>MENU</button>
            {isOpen &&
                <div className={styles.menu__container}>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__text}><a className={styles.menu__link}>Training diary</a></li>
                        <li className={styles.menu__text}><a className={styles.menu__link}>Body measurements</a></li>
                    </ul>
                </div>}
        </>
    );

};

export default Menu;