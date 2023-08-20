import React from "react";
import "./Home.scss";
import home from "./home.jpg";
import { Contact } from "../Contact/Contact";
import { Work } from "../Work/Work";

export const Home: React.FC = (props) => {
    return (
        <>
            <section id="home">
                <img
                    src={home}
                    className="home-img"
                    alt="LE BEC Epicerie fine &amp; Arts de la table"
                />
            </section>
            <Work />
            <Contact />
        </>
    );
};
