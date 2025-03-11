import { useEffect, useRef, useState } from "react";
import { IntroBox1 } from "./IntroBox1";
import { IntroBox2 } from "./IntroBox2";
import { IntroBox3 } from "./IntroBox3";
import { IntroBox4 } from "./IntroBox4";
import { useIsMobile } from "@/hooks/useIsMobile";
import "./Intro.scss";

export const Intro: React.FC = () => {
    const isMobile = useIsMobile();
    const leftRef = useRef<HTMLDivElement>(null);
    const [leftHeight, setLeftHeight] = useState<string | undefined>(undefined);

    useEffect(() => {
        setLeftHeight(`calc(${leftRef.current?.clientHeight}px + 20px + 4px)`);
    }, []);

    return (
        <section id="intro" className="flex-row">
            {!isMobile && (
                <>
                    <div
                        id="intro-column-left"
                        className="flex-column"
                        ref={leftRef}
                    >
                        <IntroBox2 />
                        <div className="flex-row flex-1">
                            <IntroBox3 />
                            <IntroBox4 />
                        </div>
                    </div>
                    <IntroBox1 height={leftHeight} />
                </>
            )}
            {isMobile && (
                <>
                    <IntroBox2 />
                    <IntroBox3 />
                    <IntroBox4 />
                </>
            )}
        </section>
    );
};
