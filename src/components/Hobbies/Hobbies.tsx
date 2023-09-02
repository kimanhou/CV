import React from "react";
import "./Hobbies.scss";
import HobbiesBlock from "./HobbiesBlock";
import travel from "./travel.png";
import tiny from "./tiny.png";
import sport from "./sport.png";
import music from "./music.png";
import food from "./food.png";
import dog from "./dog.png";

const Hobbies: React.FC = (props) => {
    return (
        <section id="hobbies">
            <div className="hobbies-title">Hobbies</div>
            <div className="hobbies-list-container flex-row">
                <ul className="hobbies-block-list">
                    <li>
                        <HobbiesBlock iconSrc={travel} text="Travels" />
                    </li>
                    <li>
                        <HobbiesBlock iconSrc={food} text="Food" />
                    </li>
                    <li>
                        <HobbiesBlock iconSrc={music} text="Music" />
                    </li>
                </ul>
                <ul className="hobbies-block-list">
                    <li>
                        <HobbiesBlock iconSrc={sport} text="Sport" />
                    </li>
                    <li>
                        <HobbiesBlock iconSrc={dog} text="Dogs" />
                    </li>
                    <li>
                        <HobbiesBlock iconSrc={tiny} text="Tiny living" />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Hobbies;
