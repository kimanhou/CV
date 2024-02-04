import React from "react";
import "./IntroBox4.scss";
import { SocialBar } from "components/Social";
import { Animator } from "components/common/Animator/Animator";

export const IntroBox4: React.FC = (props) => {
    return (
        <div
            id="intro-box-4"
            className="flex-1 intro-box flex-column justify-content-center align-items-center"
        >
            <Animator animationClassName="intro-box-4-h1">
                <h1>WANT TO SAY 'HELLO' ?</h1>
            </Animator>
            <Animator animationClassName="intro-box-4-social-bar">
                <SocialBar />
            </Animator>
        </div>
    );
};
