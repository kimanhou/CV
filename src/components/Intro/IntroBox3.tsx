import { FC, useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { RAKUTEN_WORK_INFO } from "@/components/Main/Work/utils";
import AnimatedTags from "@/components/common/Tag/AnimatedTags";
import AnimatorOnScroll from "@/components/common/Animator/AnimatorOnScroll";
import computer from "@/img/computer.png";
import styles from "./IntroBox3.module.scss";

const IntroBox3: FC = (props) => {
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const [h1Height, setH1Height] = useState<number | null>(null);
    const [h1Width, setH1Width] = useState<number | null>(null);

    const isMobile = useIsMobile();

    const getH1Style = () => {
        if (isMobile && h1Height !== null && h1Width !== null) {
            return {
                width: `${h1Height}px`,
                height: `${h1Width}px`,
                transform: `translateY(${h1Width - h1Height}px)`,
            };
        }
        return {};
    };

    useEffect(() => {
        if (isMobile) {
            const timeOut = setTimeout(() => {
                if (h1Ref.current) {
                    setH1Height(h1Ref.current.offsetHeight);
                    setH1Width(h1Ref.current.offsetWidth);
                }
            }, 100);

            return () => clearTimeout(timeOut);
        }
    }, [isMobile]);

    return (
        <div className={styles.introBox3}>
            <div className={styles.introBox3H1Wrapper} style={getH1Style()}>
                <AnimatorOnScroll
                    animationClassName={styles.introBox3H1Init}
                    animationExitClassName={styles.introBox3H1Exit}
                >
                    <h1 ref={h1Ref}>LATEST POSITION</h1>
                </AnimatorOnScroll>
            </div>
            <div className={styles.introBox3Content}>
                <AnimatorOnScroll
                    animationClassName={styles.introBox3ContentInit}
                    animationExitClassName={styles.introBox3ContentExit}
                >
                    <img src={computer} alt="Illustration of a laptop" />
                    <h4>
                        <b>Frontend Engineer</b> at <b>Rakuten</b>
                    </h4>
                    <p>
                        You know when you're on a website and suddenly an ad pop
                        up blows up into your face, like a wild Pokemon ?{" "}
                        <br></br> Well, that's me.
                    </p>
                </AnimatorOnScroll>

                <AnimatedTags
                    tags={["React", "TypeScript", "Vue.js", "JavaScript"]}
                    delay={0.8}
                />
            </div>
        </div>
    );
};

export default IntroBox3;
