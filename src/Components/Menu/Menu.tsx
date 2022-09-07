import React from "react";
import styles from "./menu.module.css";

type TState = {
    isOpen: boolean
}

class Menu extends React.Component<any, TState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false
        }
        this._clickButton = this._clickButton.bind(this);
    }

    _clickButton() {
        if (!this.state.isOpen) {
            this.setState({
                isOpen: true
            })
        } else {
            this.setState({
                isOpen: false
            })
        }
    }

    render() {
        return (
            <>
                <button className={styles.menu__button} type={"button"} onClick={this._clickButton}>MENU</button>
                {this.state.isOpen &&
                    <div className={styles.menu__container}>
                        <ul className={styles.menu__list}>
                            <li className={styles.menu__text}><a className={styles.menu__link}>Training diary</a></li>
                            <li className={styles.menu__text}><a className={styles.menu__link}>Body measurements</a></li>
                        </ul>
                    </div>}
            </>
        );
    }
};

export default Menu;