import { FC } from "react";
import { SocialMediaEnum } from "./SocialIcon";
import { getMessage } from "./utils";
import "./SocialMessage.scss";

interface ISocialMessageProps {
    hoveredIcon: SocialMediaEnum | null;
    media: SocialMediaEnum;
}

export const SocialMessage: FC<ISocialMessageProps> = (props) => {
    const isVisibleClassName =
        props.hoveredIcon === props.media ? "visible" : "";

    const message = getMessage(props.media);

    return (
        <div className={`social-bar-message ${isVisibleClassName}`}>
            {message}
        </div>
    );
};
