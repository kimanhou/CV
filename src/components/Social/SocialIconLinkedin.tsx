import { FC } from "react";
import {
    ISocialIconCommonProps,
    SocialIcon,
    SocialMediaEnum,
} from "./SocialIcon";

export const SocialIconLinkedin: FC<ISocialIconCommonProps> = (props) => {
    return (
        <SocialIcon
            media={SocialMediaEnum.LINKEDIN}
            onHover={props.onHover}
            onHoverLeave={props.onHoverLeave}
        />
    );
};
