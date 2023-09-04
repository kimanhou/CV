import React from "react";
import "./Intro.scss";
import avatar from "./avatar.png";

export const Intro: React.FC = (props) => {
    return (
        <section id="intro">
            <img src={avatar} className="home-img" alt="Avatar" />
        </section>
    );
};
