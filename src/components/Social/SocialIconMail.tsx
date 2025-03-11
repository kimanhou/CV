import {
    ISocialIconCommonProps,
    SocialIcon,
    SocialMediaEnum,
} from "./SocialIcon";

export const SocialIconMail: React.FC<ISocialIconCommonProps> = (props) => {
    return (
        <SocialIcon
            media={SocialMediaEnum.MAIL}
            onHover={props.onHover}
            onHoverLeave={props.onHoverLeave}
        />
    );
};
