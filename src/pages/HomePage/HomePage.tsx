import React, {FC} from "react";
import styles from "./homePage.module.css";

import BackgroundVideo from "../../Components/BackgroundVideo/BackgroundVideo";
import BackgroundImage from "../../Components/BackgroundImage/BackgroundImage";
import Menu from "../../Components/Menu/Menu";
import Citation from "../../Components/Citation/Citation";

import {breakpoints} from "../../consts/consts";
import {useAppSelector} from "../../services/hooks";
import MenuMobile from "../../Components/MenuMobile/MenuMobile";

const HomePage: FC = (): JSX.Element => {

    const selector = useAppSelector(state => state.innerWidthReducer)

    const toggleMenu = (handler: () => void) => {
        handler();
    }

    return (
        <div className={styles.homePage}>
            {selector > breakpoints.mobile ?
                <>
                    <BackgroundVideo/>
                    <Menu toggleMenu={() => toggleMenu}/>
                </>
                :
                <>
                    <BackgroundImage/>
                    <MenuMobile toggleMenu={() => toggleMenu} />
                </>
            }

            <Citation/>
        </div>
    )
}

export default HomePage;