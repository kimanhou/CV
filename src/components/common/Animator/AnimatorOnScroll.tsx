import { CSSProperties, FC, useRef } from "react";
import { useIntersection } from "@/hooks/useIntersection";
import Animator from "@/components/common/Animator/Animator";
import styles from "./AnimatorOnScroll.module.scss";

interface IAnimatorOnScrollProps {
    children: JSX.Element | JSX.Element[];
    animationClassName: string;
    animationExitClassName?: string;
    animationStyleInit?: CSSProperties;
    animationStyleExit?: CSSProperties;
}

const AnimatorOnScroll: FC<IAnimatorOnScrollProps> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIntersection({ element: ref, threshold: 0 });
    const { children, ...rest } = props;

    return (
        <div className={styles.animatorOnScroll}>
            <div className={styles.verticalIntersectionDetector} ref={ref} />
            <Animator start={isVisible} {...rest}>
                {children}
            </Animator>
        </div>
    );
};

export default AnimatorOnScroll;
