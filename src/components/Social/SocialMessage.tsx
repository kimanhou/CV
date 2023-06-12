import React from "react";
import "./SocialMessage.scss";

interface ISocialMessageProps {
    message: string;
}

export const SocialMessage: React.FC<ISocialMessageProps> = (props) => {
    const isVisibleClassName = props.message === "" ? "hidden" : "visible";
    return (
        <div className={`social-bar-message ${isVisibleClassName}`}>
            {props.message}
        </div>
    );
};
