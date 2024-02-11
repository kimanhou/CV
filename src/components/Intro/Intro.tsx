import React from "react";
import "./Intro.scss";
import { IntroBox1 } from "./IntroBox1";
import { IntroBox3 } from "./IntroBox3";
import { IntroBox4 } from "./IntroBox4";
import { IntroBox2 } from "./IntroBox2";
import { useIsMobile } from "hooks/useIsMobile";

export const Intro: React.FC = (props) => {
    const isMobile = useIsMobile();

    return (
        <section id="intro" className="flex-row">
            {!isMobile && (
                <>
                    <div id="intro-column-left" className="flex-column">
                        <IntroBox2 />
                        <div className="flex-row flex-1">
                            <IntroBox3 />
                            <IntroBox4 />
                        </div>
                    </div>
                    <IntroBox1 />
                </>
            )}
            {isMobile && (
                <>
                    <IntroBox1 />
                    <IntroBox2 />
                    <IntroBox3 />
                    <IntroBox4 />
                </>
            )}
        </section>
    );
};
