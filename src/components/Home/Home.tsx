import React from "react";
import { Divider } from "../Divider/Divider";
import Main from "../Main/Main";
import { Intro } from "../Intro/Intro";

export const Home: React.FC = (props) => {
    return (
        <section id="home">
            <Intro />
            <Divider />
            <Main />
        </section>
    );
};
