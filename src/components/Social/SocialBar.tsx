import { useState } from "react";
import "./SocialBar.scss";
import { SocialMediaEnum } from "./SocialIcon";
import { SocialIconGithub } from "./SocialIconGithub";
import { SocialIconLinkedin } from "./SocialIconLinkedin";
import { SocialIconMail } from "./SocialIconMail";
import { SocialMessage } from "./SocialMessage";

interface ISocialBarProps {}

export const SocialBar: React.FC<ISocialBarProps> = (props) => {
    const [hoveredIcon, setHoveredIcon] = useState<SocialMediaEnum | null>(
        null
    );

    return (
        <div className="social-bar">
            <div className="social-bar-message-container">
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
            <div className="social-bar-icons flex-row">
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
