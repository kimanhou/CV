import { FC, useEffect, useRef, useState } from "react";
import IntroBox1 from "./IntroBox1";
import IntroBox2 from "./IntroBox2";
import IntroBox3 from "./IntroBox3";
import IntroBox4 from "./IntroBox4";
import { useIsMobile } from "@/hooks/useIsMobile";
import styles from "./Intro.module.scss";

const Intro: FC = () => {
    const isMobile = useIsMobile();
    const leftRef = useRef<HTMLDivElement>(null);
    const [leftHeight, setLeftHeight] = useState<string | undefined>(undefined);

    useEffect(() => {
        setLeftHeight(`calc(${leftRef.current?.clientHeight}px)`);
    }, [leftRef.current]);

    return (
        <section className={styles.intro}>
            {!isMobile && (
                <>
                    <div className={styles.introColumnLeft} ref={leftRef}>
                        <IntroBox2 />
                        <div className={styles.introSecondLine}>
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

export default Intro;
