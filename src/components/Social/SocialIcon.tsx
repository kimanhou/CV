import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SocialIcon.scss";
import { getLink, getIconDefinition } from "./utils";

export enum SocialMediaEnum {
    GITHUB = "github",
    LINKEDIN = "linkedin",
    MAIL = "mail",
}

export interface ISocialIconCommonProps {
    onHover: () => void;
    onHoverLeave: () => void;
}

interface ISocialIconProps {
    media: SocialMediaEnum;
    onHover: () => void;
    onHoverLeave: () => void;
}

export const SocialIcon: React.FC<ISocialIconProps> = (props) => {
    return (
        <a
            className={`social-icon ${props.media}`}
            href={getLink(props.media)}
            onMouseEnter={() => props.onHover()}
            onMouseLeave={() => props.onHoverLeave()}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <FontAwesomeIcon icon={getIconDefinition(props.media)} />
        </a>
    );
};
