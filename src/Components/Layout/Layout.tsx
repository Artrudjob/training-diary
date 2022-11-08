import React, {FC, useEffect, useState} from "react";
import styles from "./layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout: FC = (): JSX.Element => {
    const [windowPosY, setWindowPosY] = useState<number>(0);
    const [miniHeader, setMiniHeader] = useState<boolean>(false);
    const [invisibleHeader, setInvisibleHeader] = useState<boolean>(false);

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

    return (
        <>
            <Header miniHeader={miniHeader} invisibleHeader={invisibleHeader}/>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;