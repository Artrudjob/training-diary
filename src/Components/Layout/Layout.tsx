import React from "react";
import styles from "./layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

class Layout extends React.Component<any, any> {

    render() {
        return (
            <>
                <Header />
                <main className={styles.main}>
                    <Outlet />
                </main>
                <Footer />
            </>
        )
    }
}

export default Layout;