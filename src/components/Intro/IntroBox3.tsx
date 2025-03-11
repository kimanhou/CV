import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "hooks/useIsMobile";
import computer from "./computer.png";
import { RAKUTEN_WORK_INFO } from "components/Main/Work/utils";
import AnimatedTags from "components/common/Tag/AnimatedTags";
import "./IntroBox3.scss";
import AnimatorOnScroll from "components/common/Animator/AnimatorOnScroll";

export const IntroBox3: React.FC = (props) => {
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
        <div
            id="intro-box-3"
            className="flex-1 intro-box flex-row align-items-center justify-content-center"
        >
            <div id="intro-box-3-h1-wrapper" style={getH1Style()}>
                <AnimatorOnScroll
                    animationClassName="intro-box-3-h1"
                    animationExitClassName="intro-box-3-h1-exit"
                >
                    <h1 ref={h1Ref}>CURRENT POSITION</h1>
                </AnimatorOnScroll>
            </div>
            <div
                id="intro-box-3-content"
                className="flex-column align-items-center"
            >
                <AnimatorOnScroll
                    animationClassName="intro-box-3-content"
                    animationExitClassName="intro-box-3-content-exit"
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

                <AnimatedTags tags={RAKUTEN_WORK_INFO.tags} delay={0.8} />
            </div>
        </div>
    );
};
