import { FC } from "react";
import {
    ISocialIconCommonProps,
    SocialIcon,
    SocialMediaEnum,
} from "./SocialIcon";

export const SocialIconGithub: FC<ISocialIconCommonProps> = (props) => {
    return (
        <SocialIcon
            media={SocialMediaEnum.GITHUB}
            onHover={props.onHover}
            onHoverLeave={props.onHoverLeave}
        />
    );
};
