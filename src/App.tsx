import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import { MainTabEnum } from "@/components/Main/Main";
import DarkModeBackground from "@/components/DarkModeBackground/DarkModeBackground";
import useDarkMode from "@/hooks/useDarkMode";
import useEffectSkipFirstRender from "@/hooks/useEffectSkipFirstRender";
import { setTheme } from "@/localStorageUtils";
import styles from "./App.module.scss";

const App = () => {
    const [activeTab, setActiveTab] = useState<MainTabEnum>(MainTabEnum.WORK);
    const [isDarkMode, setIsDarkMode] = useState(useDarkMode());
    const [darkModeClassName, setDarkModeClassName] = useState(
        isDarkMode ? styles.darkMode : ""
    );

    useEffectSkipFirstRender(() => {
        setTheme(isDarkMode ? "dark" : "light");

        setTimeout(() => {
            setDarkModeClassName(isDarkMode ? styles.darkMode : "");
        }, 1000);
    }, [isDarkMode]);

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
            <DarkModeBackground isDarkMode={isDarkMode} />
        </>
    );
};

export default App;
