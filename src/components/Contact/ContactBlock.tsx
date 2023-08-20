import React from "react";
import { SocialMediaEnum } from "../Social/SocialIcon";
import "./ContactBlock.scss";

interface IContactBlockProps {
    media: SocialMediaEnum;
}

const ContactBlock: React.FC<IContactBlockProps> = (props) => {
    return <div className="Contact-block">Contact Block {props.media}</div>;
};

export default ContactBlock;
