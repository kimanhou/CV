import React from "react";
import "./Intro.scss";
import avatar from "./avatar.png";

export const Intro: React.FC = (props) => {
    return (
        <section id="intro" className="flex-row">
            <div id="intro-column-left" className="flex-column">
                <div id="intro-box-2" className="flex-row flex-1 intro-box">
                    TWO
                </div>
                <div className="flex-row flex-1">
                    <div id="intro-box-3" className="flex-1 intro-box">
                        THREE
                    </div>
                    <div id="intro-box-4" className="flex-1 intro-box">
                        FOUR
                    </div>
                </div>
            </div>
            <div
                id="intro-box-1"
                className="flex-1 flex-column intro-box"
                style={{
                    backgroundImage: `url(${avatar})`,
                }}
            >
                ONE
            </div>
        </section>
    );
};
