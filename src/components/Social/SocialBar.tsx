import React, { useState } from "react";
import "./SocialBar.scss";
import { SocialMediaEnum } from "./SocialIcon";
import { SocialIconGithub } from "./SocialIconGithub";
import { SocialIconLinkedin } from "./SocialIconLinkedin";
import { SocialIconMail } from "./SocialIconMail";
import { SocialMessage } from "./SocialMessage";
import { getMessage } from "./utils";

interface ISocialBarProps {}

export const SocialBar: React.FC<ISocialBarProps> = (props) => {
    const [message, setMessage] = useState<string>("");

    function onIconHover(icon: SocialMediaEnum | null) {
        if (icon === null) {
            console.log("Icon null");
            setMessage("");
            return;
        }

        setMessage(getMessage(icon));
    }

    return (
        <div className="social-bar">
            <SocialMessage message={message} />
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
