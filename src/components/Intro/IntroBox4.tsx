import { FC } from "react";
import { SocialBar } from "@/components/Social";
import AnimatorOnScroll from "@/components/common/Animator/AnimatorOnScroll";
import "./IntroBox4.scss";

const IntroBox4: FC = (props) => {
    return (
        <div
            id="intro-box-4"
            className="flex-1 intro-box flex-column justify-content-center align-items-center"
        >
            <AnimatorOnScroll
                animationClassName="intro-box-4-h1"
                animationExitClassName="intro-box-4-h1-exit"
            >
                <h1>WANT TO SAY 'HELLO' ?</h1>
            </AnimatorOnScroll>
            <AnimatorOnScroll
                animationClassName="intro-box-4-social-bar"
                animationExitClassName="intro-box-4-social-bar-exit"
            >
                <SocialBar />
            </AnimatorOnScroll>
        </div>
    );
};

export default IntroBox4;
