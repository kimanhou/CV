import { FC, useState } from "react";
import { SocialMediaEnum } from "./SocialIcon";
import SocialIconGithub from "./SocialIconGithub";
import SocialIconLinkedin from "./SocialIconLinkedin";
import SocialIconMail from "./SocialIconMail";
import SocialMessage from "./SocialMessage";
import styles from "./SocialBar.module.scss";

interface ISocialBarProps {
    hasMarginBottom?: boolean;
}

export const SocialBar: FC<ISocialBarProps> = (props) => {
    const [hoveredIcon, setHoveredIcon] = useState<SocialMediaEnum | null>(
        null
    );

    const hasMarginBottomClassName = props.hasMarginBottom
        ? styles.hasMarginBottom
        : "";

    return (
        <div className={`${styles.socialBar} ${hasMarginBottomClassName}`}>
            <div className={styles.socialBarMessageContainer}>
                <SocialMessage
                    hoveredIcon={hoveredIcon}
                    media={SocialMediaEnum.MAIL}
                />
                <SocialMessage
                    hoveredIcon={hoveredIcon}
                    media={SocialMediaEnum.LINKEDIN}
                />
                <SocialMessage
                    hoveredIcon={hoveredIcon}
                    media={SocialMediaEnum.GITHUB}
                />
            </div>
            <div className={styles.socialBarIcons}>
                <SocialIconMail
                    onHover={() => setHoveredIcon(SocialMediaEnum.MAIL)}
                    onHoverLeave={() => setHoveredIcon(null)}
                />
                <SocialIconLinkedin
                    onHover={() => setHoveredIcon(SocialMediaEnum.LINKEDIN)}
                    onHoverLeave={() => setHoveredIcon(null)}
                />
                <SocialIconGithub
                    onHover={() => setHoveredIcon(SocialMediaEnum.GITHUB)}
                    onHoverLeave={() => setHoveredIcon(null)}
                />
            </div>
        </div>
    );
};
