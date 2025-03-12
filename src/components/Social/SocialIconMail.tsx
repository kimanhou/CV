import { FC } from "react";
import {
    ISocialIconCommonProps,
    SocialIcon,
    SocialMediaEnum,
} from "./SocialIcon";

const SocialIconMail: FC<ISocialIconCommonProps> = (props) => {
    return (
        <SocialIcon
            media={SocialMediaEnum.MAIL}
            onHover={props.onHover}
            onHoverLeave={props.onHoverLeave}
        />
    );
};

export default SocialIconMail;
