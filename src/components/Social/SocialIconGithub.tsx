import React from "react";
import {
    ISocialIconCommonProps,
    SocialIcon,
    SocialMediaEnum,
} from "./SocialIcon";

export const SocialIconGithub: React.FC<ISocialIconCommonProps> = (props) => {
    return (
        <SocialIcon
            media={SocialMediaEnum.GITHUB}
            onHover={props.onHover}
            onHoverLeave={props.onHoverLeave}
        />
    );
};
