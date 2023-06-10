import React from "react";
import "./Home.scss";
import home from "./home.png";

export const Home: React.FC = (props) => {
    return (
        <section id="home">
            <img
                src={home}
                className="home-img"
                alt="LE BEC Epicerie fine &amp; Arts de la table"
            />
        </section>
    );
};
