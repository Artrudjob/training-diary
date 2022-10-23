import React, {FC} from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Components/Layout/Layout";
import HomePages from "./pages/HomePage/HomePage";

const App: FC = (): JSX.Element => {

    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<HomePages/>}/>
            </Route>
        </Routes>
    );
}

export default App;
