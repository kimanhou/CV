import { CSSProperties, FC, useRef } from "react";
import { useIntersection } from "hooks/useIntersection";
import "./Animator.scss";

interface IAnimatorProps {
    children: JSX.Element | JSX.Element[];
    animationClassName: string;
    animationExitClassName?: string;
    animationStyleInit?: CSSProperties;
    animationStyleExit?: CSSProperties;
    start: boolean;
}

const Animator: FC<IAnimatorProps> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const className = props.start
        ? props.animationClassName
        : props.animationExitClassName;
    const style = props.start
        ? { ...props.animationStyleInit }
        : { ...props.animationStyleExit };

    return (
        <div className="animator-wrapper" ref={ref}>
            <div className="animator-invisible">{props.children}</div>
            <div className={`animator-absolute ${className}`} style={style}>
                {props.children}
            </div>
        </div>
    );
};

export default Animator;
