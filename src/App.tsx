import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import { MainTabEnum } from "@/components/Main/Main";
import { useDarkMode } from "./hooks/useDarkMode";
import styles from "./App.module.scss";
import DarkModeBackground from "./components/DarkModeBackground/DarkModeBackground";

const App = () => {
    const [activeTab, setActiveTab] = useState<MainTabEnum>(MainTabEnum.WORK);
    const [isDarkMode, setIsDarkMode] = useState(useDarkMode());
    const darkModeClassName = isDarkMode ? styles.darkMode : styles.lightMode;
    const darkModeShadowClassName = isDarkMode
        ? styles.lightMode
        : styles.darkMode;

    return (
        <>
            <div className={`${styles.app} ${darkModeClassName}`}>
                <HashRouter>
                    <Header
                        setActiveTab={setActiveTab}
                        isDarkMode={isDarkMode}
                        setIsDarkMode={setIsDarkMode}
                    />
                    <Routes>
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
            <DarkModeBackground isActive={isDarkMode}>
                <></>
                {/* <div className={`${styles.app} ${darkModeShadowClassName}`}>
                    <HashRouter>
                        <Header
                            setActiveTab={setActiveTab}
                            isDarkMode={isDarkMode}
                            setIsDarkMode={setIsDarkMode}
                        />
                        <Routes>
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
                </div> */}
            </DarkModeBackground>
        </>
    );
};

export default App;
