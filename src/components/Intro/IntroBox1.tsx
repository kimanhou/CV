import React from "react";
import avatar from "./avatar.png";
import "./IntroBox1.scss";

export const IntroBox1: React.FC = (props) => {
    return (
        <div id="intro-box-1-container" className="flex-row">
            <div
                id="intro-box-1"
                className="flex-1 flex-column intro-box"
                style={{
                    backgroundImage: `url(${avatar})`,
                }}
            />
        </div>
    );
};
