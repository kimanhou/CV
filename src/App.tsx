import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact/Contact";
import { Shop } from "./components/Shop/Shop";
import { About } from "./components/About/About";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header />
                <Routes>
                    <Route path={"/contact"} element={<Contact />}></Route>

                    <Route path={"/shop"} element={<Shop />}></Route>

                    <Route path={"/about"} element={<About />}></Route>

                    <Route path={"/"} element={<Home />}></Route>
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
