import React, {FC, useRef, useState} from "react";
import styles from "./homePage.module.css";

import BackgroundVideo from "../../Components/BackgroundVideo/BackgroundVideo";
import BackgroundImage from "../../Components/BackgroundImage/BackgroundImage";
import Menu from "../../Components/Menu/Menu";
import Citation from "../../Components/Citation/Citation";

import {breakpoints} from "../../consts/consts";
import {useAppSelector, useOnClickOutside} from "../../services/hooks";
import MenuMobile from "../../Components/MenuMobile/MenuMobile";
import Button from "../../Components/Button/Button";

const HomePage: FC = (): JSX.Element => {

    const selector = useAppSelector(state => state.innerWidthReducer);

    const [isOpen, setOpen] = useState<boolean>(false);

    const refMenu = useRef(null);
    const refBtn = useRef(null);

    useOnClickOutside(refBtn, refMenu, () => setOpen(false));

    return (
        <section className={styles.homePage}>
            {selector > breakpoints.mobile ?
                <>
                    <BackgroundVideo/>
                    <div className={styles.homePage__btnBox}>
                        <Button text={"MENU"} refBtn={refBtn} click={() => {
                            setOpen(!isOpen)
                        }}/>
                    </div>
                    {isOpen && <Menu refMenu={refMenu}/>}
                </>
                :
                <>
                    <BackgroundImage/>
                    <div className={styles.homePage__btnBox_mobile}>
                        <Button text={"MENU"} refBtn={refBtn} click={() => {
                            setOpen(!isOpen)
                        }}/>
                    </div>
                    {isOpen && <MenuMobile refMenu={refMenu}/>}
                </>
            }
            <Citation/>
        </section>
    )
}

export default HomePage;