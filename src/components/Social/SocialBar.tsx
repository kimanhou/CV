import React from "react";
import { SocialIconGithub } from "./SocialIconGithub";
import { SocialIconLinkedin } from "./SocialIconLinkedin";
import { SocialIconMail } from "./SocialIconMail";

interface ISocialBarProps {}

export const SocialBar: React.FC<ISocialBarProps> = (props) => {
    return (
        <div className="social-bar flex-row">
            <SocialIconMail />
            <SocialIconLinkedin />
            <SocialIconGithub />
        </div>
    );
};
