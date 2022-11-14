import React, {FC} from "react";
import styles from "./startTitle.module.css";
import {useAppSelector} from "../../services/hooks";
import {breakpoints} from "../../consts/consts";

type TProps = {
    miniHeader: boolean,
    invisibleHeader: boolean
}

const StartTitle: FC<TProps> = ({miniHeader, invisibleHeader}): JSX.Element => {

    const selector = useAppSelector(state => state.innerWidthReducer);

    const sizeHeader = miniHeader? styles.startTitle__title_mini : styles.startTitle__title;
    const visibilityHeader = invisibleHeader && styles.startTitle__invisible;

    return (
        <>
            {(selector > breakpoints.tablet) ?
                <section className={styles.startTitle}>
                    <h1 className={`${sizeHeader} ${visibilityHeader}`}>MAKE YOURSELF</h1>
                </section>
                :
                <section className={styles.startTitle_mobile_size}>
                    <h1 className={styles.startTitle__title_mobile_size}>MAKE YOURSELF</h1>
                </section>
            }
        </>
    );
};

export default StartTitle;