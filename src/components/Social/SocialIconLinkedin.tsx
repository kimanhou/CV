import React from "react";
import {
    ISocialIconCommonProps,
    SocialIcon,
    SocialMediaEnum,
} from "./SocialIcon";

export const SocialIconLinkedin: React.FC<ISocialIconCommonProps> = (props) => {
    return (
        <SocialIcon
            media={SocialMediaEnum.LINKEDIN}
            onHover={props.onHover}
            onHoverLeave={props.onHoverLeave}
        />
    );
};
