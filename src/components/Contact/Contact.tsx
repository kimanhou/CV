import React from "react";
import { SocialMediaEnum } from "../Social/SocialIcon";
import "./Contact.scss";
import ContactBlock from "./ContactBlock";

export const Contact: React.FC = (props) => {
    return (
        <section id="contact">
            <svg
                className="p-contact__triangle"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="none"
                viewBox="0 0 1920 480"
                xmlSpace="preserve"
            >
                <polygon points="0,480 0,0 1920,0 " fill="lightgrey"></polygon>
            </svg>
            <div className="c-container c-container--top flex-row">
                <ContactBlock media={SocialMediaEnum.MAIL} />
                <ContactBlock media={SocialMediaEnum.LINKEDIN} />
                <ContactBlock media={SocialMediaEnum.GITHUB} />
            </div>
        </section>
    );
};
