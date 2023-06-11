import React, { useState } from "react";
import "./SocialBar.scss";
import { SocialMediaEnum } from "./SocialIcon";
import { SocialIconGithub } from "./SocialIconGithub";
import { SocialIconLinkedin } from "./SocialIconLinkedin";
import { SocialIconMail } from "./SocialIconMail";
import { getMessage } from "./utils";

interface ISocialBarProps {}

export const SocialBar: React.FC<ISocialBarProps> = (props) => {
    // const [hoveredIcon, setHoveredIcon] = useState<SocialMediaEnum | null>(
    //     null
    // );
    const [message, setMessage] = useState<string>("");

    function hideMessage() {
        console.log("Hide message");
    }

    function onIconHover(icon: SocialMediaEnum | null) {
        // setHoveredIcon(icon);
        if (icon === null) {
            hideMessage();
            return;
        }

        setMessage(getMessage(icon));
        console.log("Hover on ", icon);
    }

    return (
        <div className="social-bar">
            <div className="social-bar-message">kanguyenlu@gmail.com</div>
            <div className="social-bar-icons flex-row">
                <SocialIconMail
                    onHover={() => onIconHover(SocialMediaEnum.MAIL)}
                    onHoverLeave={() => onIconHover(null)}
                />
                <SocialIconLinkedin
                    onHover={() => onIconHover(SocialMediaEnum.LINKEDIN)}
                    onHoverLeave={() => onIconHover(null)}
                />
                <SocialIconGithub
                    onHover={() => onIconHover(SocialMediaEnum.GITHUB)}
                    onHoverLeave={() => onIconHover(null)}
                />
            </div>
        </div>
    );
};
