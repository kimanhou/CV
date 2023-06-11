import {
    faGithub,
    faLinkedinIn,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SocialIcon.scss";

export enum SocialMediaEnum {
    GITHUB = "github",
    LINKEDIN = "linkedin",
    MAIL = "mail",
}

interface ISocialIconProps {
    media: SocialMediaEnum;
}

export const SocialIcon: React.FC<ISocialIconProps> = (props) => {
    function getIconDefinition() {
        switch (props.media) {
            case SocialMediaEnum.GITHUB:
                return faGithub;
            case SocialMediaEnum.LINKEDIN:
                return faLinkedinIn;
            case SocialMediaEnum.MAIL:
                return faGoogle;
            default:
                return faGoogle;
        }
    }

    return (
        <a className={`social-icon ${props.media}`} href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <FontAwesomeIcon icon={getIconDefinition()} />
        </a>
    );
};
