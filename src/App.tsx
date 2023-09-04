import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Playground } from "./components/Playground/Playground";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header />
                <Routes>
                    <Route
                        path={"/playground"}
                        element={<Playground />}
                    ></Route>
                    <Route path={"/"} element={<Home />}></Route>
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
