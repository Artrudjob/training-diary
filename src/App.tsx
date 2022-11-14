import React, {FC, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Components/Layout/Layout";
import HomePages from "./pages/HomePage/HomePage";
import TrainingDiaryPage from "./pages/TrainingDiaryPage/TrainingDiaryPage";
import {useAppDispatch} from "./services/hooks";
import {getInnerWidth} from "./services/actions/getInnerWidth";

const App: FC = (): JSX.Element => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getInnerWidth(window.innerWidth));

        function updateWidth() {
            dispatch(getInnerWidth(window.innerWidth));
        }

        window.addEventListener("resize", updateWidth);

        return () => {
            window.removeEventListener("resize", updateWidth);
        }
    }, [])

    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<HomePages/>}/>
                <Route path={"/trainingDiary"} element={<TrainingDiaryPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
