import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Playground } from "./components/Playground/Playground";
import { MainTabEnum } from "./components/Main/Main";

function App() {
    const [activeTab, setActiveTab] = useState<MainTabEnum>(MainTabEnum.WORK);

    return (
        <div className="App">
            <HashRouter>
                <Header setActiveTab={setActiveTab} />
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
}

export default App;
