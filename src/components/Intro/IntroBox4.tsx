import { FC } from "react";
import { SocialBar } from "@/components/Social";
import AnimatorOnScroll from "@/components/common/Animator/AnimatorOnScroll";
import pattern from "@/img/pattern.svg";
import styles from "./IntroBox4.module.scss";

const IntroBox4: FC = (props) => {
    return (
        <div className={styles.introBox4}>
            <div className={styles.backgroundBackground} />
            <div
                className={styles.background}
                style={{ backgroundImage: `url(${pattern})` }}
            />
            <AnimatorOnScroll
                animationClassName={styles.introBox4H1Init}
                animationExitClassName={styles.introBox4H1Exit}
            >
                <h1>WANT TO SAY 'HELLO' ?</h1>
            </AnimatorOnScroll>
            <AnimatorOnScroll
                animationClassName={styles.introBox4SocialBarInit}
                animationExitClassName={styles.introBox4SocialBarExit}
            >
                <SocialBar />
            </AnimatorOnScroll>
        </div>
    );
};

export default IntroBox4;
