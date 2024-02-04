import React from "react";
import "./Animator.scss";

interface IAnimatorProps {
    children: JSX.Element | JSX.Element[];
    animationClassName?: string;
    animationStyle?: React.CSSProperties;
}

export const Animator: React.FC<IAnimatorProps> = (props) => {
    return (
        <div className="animator-wrapper">
            <div className="animator-invisible">{props.children}</div>
            <div
                className={`animator-absolute ${props.animationClassName}`}
                style={{ ...props.animationStyle }}
            >
                {props.children}
            </div>
        </div>
    );
};
