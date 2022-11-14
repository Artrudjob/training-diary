import React, {FC} from "react";
import styles from "./layout.module.css";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout: FC = (): JSX.Element => {

    return (
        <>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;