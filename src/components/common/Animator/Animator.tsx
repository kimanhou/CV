import React from "react";
import "./Animator.scss";

interface IAnimatorProps {
    children: JSX.Element | JSX.Element[];
    animationClassName?: string;
}

export const Animator: React.FC<IAnimatorProps> = (props) => {
    return (
        <div className="animator-wrapper">
            <div className="animator-invisible">{props.children}</div>
            <div className={`animator-absolute ${props.animationClassName}`}>
                {props.children}
            </div>
        </div>
    );
};
