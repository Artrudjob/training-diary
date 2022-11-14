import React, {FC, useEffect, useRef, useState} from "react";
import styles from "./homePage.module.css";

import BackgroundVideo from "../../Components/BackgroundVideo/BackgroundVideo";
import BackgroundImage from "../../Components/BackgroundImage/BackgroundImage";
import Menu from "../../Components/Menu/Menu";
import Citation from "../../Components/Citation/Citation";

import {breakpoints} from "../../consts/consts";
import {useAppSelector, useOnClickOutside} from "../../services/hooks";
import MenuMobile from "../../Components/MenuMobile/MenuMobile";
import Button from "../../Components/Button/Button";
import StartTitle from "../../Components/StartTitle/StartTitle";

const HomePage: FC = (): JSX.Element => {

    const selector = useAppSelector(state => state.innerWidthReducer);

    const [windowPosY, setWindowPosY] = useState<number>(0);
    const [miniHeader, setMiniHeader] = useState<boolean>(false);
    const [invisibleHeader, setInvisibleHeader] = useState<boolean>(false);
    const [isOpen, setOpen] = useState<boolean>(false);


    const refMenu = useRef(null);
    const refBtn = useRef(null);

    useEffect(() => {
        function handleScroll() {
            setWindowPosY(window.scrollY);

            (windowPosY < 110) ? setMiniHeader(false) : setMiniHeader(true);
            (windowPosY > 870) ? setInvisibleHeader(true) : setInvisibleHeader(false);
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })

    useOnClickOutside(refBtn, refMenu, () => setOpen(false));

    return (
        <section>
            {selector > breakpoints.mobile ?
                <>
                    <StartTitle miniHeader={miniHeader} invisibleHeader={invisibleHeader}/>
                    <div className={styles.homePage__container}>
                        <BackgroundVideo/>
                        <div className={styles.homePage__btnBox}>
                            <Button text={"MENU"} color={"white"} refBtn={refBtn} click={() => {
                                setOpen(!isOpen)
                            }}/>
                        </div>
                        {isOpen && <Menu refMenu={refMenu}/>}
                    </div>
                </>
                :
                <>
                    <StartTitle miniHeader={miniHeader} invisibleHeader={invisibleHeader}/>
                    <div className={styles.homePage__container}>
                        <BackgroundImage/>
                        <div className={styles.homePage__btnBox_mobile}>
                            <Button text={"MENU"} color={"white"} refBtn={refBtn} click={() => {
                                setOpen(!isOpen)
                            }}/>
                        </div>
                        {isOpen && <MenuMobile refMenu={refMenu}/>}
                    </div>
                </>
            }
            <Citation/>
        </section>
    )
}

export default HomePage;