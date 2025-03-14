import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getLink, getIconDefinition } from "./utils";
import styles from "./SocialIcon.module.scss";

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

export const SocialIcon: FC<ISocialIconProps> = (props) => {
    return (
        <a
            className={`${styles.socialIcon} ${props.media}`}
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
