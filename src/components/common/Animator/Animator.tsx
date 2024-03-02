import React, { useEffect, useRef, useState} from "react";
import { useIntersection } from "hooks/useIntersection";
import "./Animator.scss";

interface IAnimatorProps {
    children: JSX.Element | JSX.Element[];
    animationClassName: string;
    animationStyle?: React.CSSProperties;
}

export const Animator: React.FC<IAnimatorProps> = (props) => {
    const [animationClassName, setAnimationClassName] = useState('');
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIntersection(ref, "-100px");

    useEffect(() => {
        if (isVisible) {
          setAnimationClassName(props.animationClassName);
        }
      }, [isVisible, props.animationClassName]);

    return (
        <div className="animator-wrapper" ref={ref}>
            <div className="animator-invisible">{props.children}</div>
            <div
                className={`animator-absolute ${animationClassName}`}
                style={{ ...props.animationStyle }}
            >
                {props.children}
            </div>
        </div>
    );
};
