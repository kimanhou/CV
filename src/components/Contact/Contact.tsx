import React from "react";
import "./Contact.scss";

export const Contact: React.FC = (props) => {
    return (
        <section id="contact">
            <svg
                className="p-contact__triangle"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="none"
                viewBox="0 0 1440 140"
                xmlSpace="preserve"
            >
                <polygon points="0,140 0,0 1440,0 " fill="#ffffff"></polygon>
            </svg>
            <div className="c-container c-container--top">
                Contact - some content
            </div>
        </section>
    );
};
