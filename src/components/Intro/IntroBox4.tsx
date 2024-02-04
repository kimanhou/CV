import React from "react";
import "./IntroBox4.scss";
import { SocialBar } from "components/Social";

export const IntroBox4: React.FC = (props) => {
    return (
        <div
            id="intro-box-4"
            className="flex-1 intro-box flex-column justify-content-center align-items-center"
        >
            <div
                id="intro-box-4-content"
                className="flex-column justify-content-center align-items-center"
            >
                <h1>WANT TO SAY 'HELLO' ?</h1>
                <SocialBar />
            </div>
        </div>
    );
};
