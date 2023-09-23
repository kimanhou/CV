import React from "react";
import { Divider } from "../Divider/Divider";
import Main, { MainTabEnum } from "../Main/Main";
import { Intro } from "../Intro/Intro";

interface IHomeProps {
    activeTab: MainTabEnum;
    setActiveTab: (activeTab: MainTabEnum) => void;
}

export const Home: React.FC<IHomeProps> = (props) => {
    return (
        <section id="home">
            <Intro />
            <Divider />
            <Main
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
        </section>
    );
};
