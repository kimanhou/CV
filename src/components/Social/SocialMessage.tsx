import React from "react";
import { SocialMediaEnum } from "./SocialIcon";
import "./SocialMessage.scss";
import { getMessage } from "./utils";

interface ISocialMessageProps {
    hoveredIcon: SocialMediaEnum | null;
    media: SocialMediaEnum;
}

export const SocialMessage: React.FC<ISocialMessageProps> = (props) => {
    const isVisibleClassName =
        props.hoveredIcon === props.media ? "visible" : "";

    const message = getMessage(props.media);

    return (
        <div className={`social-bar-message ${isVisibleClassName}`}>
            {message}
        </div>
    );
};
