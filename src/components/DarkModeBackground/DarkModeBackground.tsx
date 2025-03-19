import { FC, useEffect, useRef, useState } from "react";
import loadingGif from "@/img/loading.webp";
import useEffectSkipFirstRender from "@/hooks/useEffectSkipFirstRender";
import styles from "./DarkModeBackground.module.scss";

interface IDarkModeBackgroundProps {
    isDarkMode: boolean;
}

const DarkModeBackground: FC<IDarkModeBackgroundProps> = (props) => {
    const darkModeBackgroundWhiteRef = useRef<HTMLDivElement>(null);
    const darkModeBackgroundBlackRef = useRef<HTMLDivElement>(null);

    const [displayContent, setDisplayContent] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);
    const isAnimatedClassName = isAnimated ? styles.isAnimated : "";

    useEffectSkipFirstRender(() => {
        setIsAnimated(true);

        setTimeout(() => {
            setDisplayContent(true);
        }, 300);
        setTimeout(() => {
            setDisplayContent(false);
        }, 1800);
    }, [props.isDarkMode]);

    useEffect(() => {
        const onAnimationEnd = () => {
            setIsAnimated(false);
        };
        darkModeBackgroundWhiteRef.current?.addEventListener(
            "animationend",
            onAnimationEnd
        );

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            darkModeBackgroundWhiteRef.current?.removeEventListener(
                "animationend",
                onAnimationEnd
            );
        };
    }, []);

    return (
        <div className={styles.darkModeBackground}>
            <div
                className={`${styles.darkModeBackgroundWhite} ${isAnimatedClassName}`}
                ref={darkModeBackgroundWhiteRef}
            />
            <div
                className={styles.content}
                style={{ display: displayContent ? "flex" : "none" }}
            >
                <img
                    className={styles.loadingGif}
                    src={loadingGif}
                    alt="Loading gif"
                ></img>
                LOADING
            </div>
            <div
                className={`${styles.darkModeBackgroundBlack} ${isAnimatedClassName}`}
                ref={darkModeBackgroundBlackRef}
            />
        </div>
    );
};

export default DarkModeBackground;
