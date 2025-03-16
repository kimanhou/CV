import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import { Playground } from "@/components/Playground/Playground";
import { MainTabEnum } from "@/components/Main/Main";
import { useDarkMode } from "./hooks/useDarkMode";
import styles from "./App.module.scss";

const App = () => {
    const [activeTab, setActiveTab] = useState<MainTabEnum>(MainTabEnum.WORK);
    const [isDarkMode, setIsDarkMode] = useState(useDarkMode());
    const darkModeClassName = isDarkMode ? styles.darkMode : "";

    return (
        <div className={`${styles.app} ${darkModeClassName}`}>
            <HashRouter>
                <Header
                    setActiveTab={setActiveTab}
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                />
                <Routes>
                    <Route
                        path={"/playground"}
                        element={<Playground />}
                    ></Route>
                    <Route
                        path={"/"}
                        element={
                            <Home
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                        }
                    ></Route>
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    );
};

export default App;
