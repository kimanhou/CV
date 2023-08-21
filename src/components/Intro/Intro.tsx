import React from "react";
import "./Intro.scss";

export const Intro: React.FC = (props) => {
    return (
        <section id="intro">
            <svg
                className="p-intro__triangle"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="none"
                viewBox="0 0 1920 480"
                xmlSpace="preserve"
            >
                <polygon points="1920,480 0,0 1920,0 " fill="#ffffff"></polygon>
            </svg>
            <div className="c-container c-container--top flex-row">INTRO</div>
        </section>
    );
};
