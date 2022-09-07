import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Components/Layout/Layout";
import HomePages from "./pages/HomePage/HomePage";

class App extends React.Component<any, any> {
  render() {
    return (
        <Routes>
          <Route path={"/"} element={<Layout />}>
              <Route index element={<HomePages />} />
          </Route>
        </Routes>
    );
  }
}

export default App;
