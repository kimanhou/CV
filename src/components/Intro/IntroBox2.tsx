import { FC, useEffect, useState } from "react";
import SlackReactionContainer from "@/components/common/SlackReaction/SlackReactionContainer";
import unicorn from "@/img/unicorn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import styles from "./IntroBox2.module.scss";

const IntroBox2: FC = () => {
    const [suspensionDots, setSuspensionDots] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    const slackMessageClassName = isTyping ? "" : styles.visible;

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
        <div className={styles.introBox2}>
            {isTyping && (
                <p className={styles.typingMessage}>
                    <b>Kim Anh</b> is typing
                    {suspensionDots}
                </p>
            )}
            <div
                className={`${styles.introBox2SlackMessage} ${slackMessageClassName}`}
            >
                <img
                    className={styles.introBox2SlackMessageImg}
                    src={unicorn}
                    alt="Unicorn avatar"
                />
                <div className={styles.introBox2SlackMessageText}>
                    <div className={styles.introBox2SlackMessageTextHeader}>
                        <b>Kim Anh Nguyen</b>
                        <span
                            className={
                                styles.introBox2SlackMessageTextHeaderTime
                            }
                        >
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
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLink} />
                        </a>
                        ).
                    </p>
                    <SlackReactionContainer />
                </div>
            </div>
        </div>
    );
};

export default IntroBox2;
