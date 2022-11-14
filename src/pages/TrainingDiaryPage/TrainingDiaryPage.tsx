import React, {useRef, useState} from "react";
import styles from "./trainingDiaryPage.module.css";
import Button from "../../Components/Button/Button";
import {useOnClickOutside} from "../../services/hooks";
import Title from "../../Components/Title/Title";

const TrainingDiaryPage = () => {

    const [menuIsOpen, setMenuOpen] = useState<boolean>(false);
    const [currentDate, setCurrentDate] = useState("day");

    const btnRef = useRef(null);
    const menuRef = useRef(null);
    const authRef = useRef(null);

    useOnClickOutside(btnRef, menuRef, () => setMenuOpen(false));

    return (
        <section className={styles.trainingDiary}>
            <Title/>
            <div className={styles.trainingDiary__container}>
                <div className={styles.trainingDiary__btnBox}>
                    <Button text={"MENU"} color={"black"} refBtn={btnRef} click={() => {setMenuOpen(!menuIsOpen)}}/>
                    <Button text={"SIGN IN"} color={"black"} refBtn={authRef} click={() => {}}/>
                </div>
                <div>
                    <h2 className={styles.trainingDiary__title}>TRAINING DIARY</h2>
                    <div className={styles.trainingDiary__btnBox}>
                        <div className={styles.trainingDiary__date}>
                            <button type={"button"} className={styles.trainingDiary_arrow_left}/>
                            <p>{"Monday"}</p>
                            <button type={"button"} className={styles.trainingDiary_arrow_right}/>
                        </div>
                        <div>
                            <button className={
                                `${styles.trainingDiary__btn} 
                                ${currentDate === "day" && styles.trainingDiary__btn_active}
                                `} type={"button"}
                                onClick={() => setCurrentDate("day")}>DAY</button>
                            <button className={
                                `${styles.trainingDiary__btn} 
                                 ${currentDate === "week" && styles.trainingDiary__btn_active}
                                 `}
                                 type={"button"}
                                 onClick={() => setCurrentDate("week")}>WEEK</button>
                            <button className={
                                `${styles.trainingDiary__btn} 
                                 ${currentDate === "month" && styles.trainingDiary__btn_active}
                                 `}
                                 type={"button"}
                                 onClick={() => setCurrentDate("month")}>MONTH</button>
                            <button className={
                                `${styles.trainingDiary__btn} 
                                 ${currentDate === "year" && styles.trainingDiary__btn_active}
                                 `}
                                 type={"button"}
                                 onClick={() => setCurrentDate("year")}>YEAR</button>
                        </div>
                    </div>
                    <div>календарь</div>
                </div>
            </div>
        </section>
    )
}

export default TrainingDiaryPage;