import React, { useEffect, useState } from "react";
import unicorn from "./unicorn.png";
import "./IntroBox2.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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
                        <br></br> My name is Kim Anh and I currently live in
                        Tokyo, Japan. As a passionate Frontend Engineer with a
                        keen appreciation for design, I always keep an eye out
                        for innovative UX and design concepts. <br></br>
                        <br></br> My other passions include eating out,
                        travelling, hiking and most recently, searching for the
                        finest onsen in Japan. On my free time, I curate an
                        online compilation of restaurants with my brother - a
                        side project I very much enjoy as it blends my love for
                        food and coding (it's a work in progress{" "}
                        <a
                            href="https://kimanhou.github.io/the-culinary-passport/#/tokyo"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLink} />
                        </a>
                        ).
                    </p>
                </div>
            </div>
        </div>
    );
};
