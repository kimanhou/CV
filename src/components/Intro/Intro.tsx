import React from "react";
import "./Intro.scss";
import { IntroBox1 } from "./IntroBox1";
import { IntroBox3 } from "./IntroBox3";
import { IntroBox4 } from "./IntroBox4";
import { IntroBox2 } from "./IntroBox2";

export const Intro: React.FC = (props) => {
    return (
        <section id="intro" className="flex-row">
            <div id="intro-column-left" className="flex-column">
                <IntroBox2 />
                <div className="flex-row flex-1">
                    <IntroBox3 />
                    <IntroBox4 />
                </div>
            </div>
            <IntroBox1 />
        </section>
    );
};
