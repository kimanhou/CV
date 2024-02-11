import React, { useEffect, useState } from "react";
import unicorn from "./unicorn.png";
import "./IntroBox2.scss";

export const IntroBox2: React.FC = (props) => {
    const [suspensionDots, setSuspensionDots] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    const slackMessageClassName = isTyping ? "" : "visible";

    useEffect(() => {
        const interval = setInterval(() => {
            setSuspensionDots((t) => {
                if (t.length > 2) {
                    return "";
                } else {
                    return t + ".";
                }
            });
        }, 300);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsTyping(false);
        }, 1800);
        return () => clearTimeout(timeOut);
    }, []);

    const getCurrentTime = () => {
        const now = new Date();
        const minutes = `${now.getMinutes()}`.padStart(2, "0");
        const hours = `${now.getHours()}`.padStart(2, "0");
        return `${hours}:${minutes}`;
    };

    return (
        <div id="intro-box-2" className="flex-column flex-1 intro-box">
            {isTyping && (
                <p className="typing-message font-size-small">
                    <b>Kim Anh</b> is typing
                    {suspensionDots}
                </p>
            )}
            <div
                className={`intro-box-2-slack-message flex-row ${slackMessageClassName}`}
            >
                <img
                    className="intro-box-2-slack-message-img"
                    src={unicorn}
                    alt="Unicorn avatar"
                />
                <div className="intro-box-2-slack-message-text">
                    <div className="intro-box-2-slack-message-text-header">
                        <b>Kim Anh Nguyen</b>
                        <span className="intro-box-2-slack-message-text-header-time">
                            {getCurrentTime()}
                        </span>
                    </div>
                    <p>
                        Hello beautiful souls ☀️<br></br>
                        <br></br> Welcome to my website. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
};
