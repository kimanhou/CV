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
                        <br></br> My name is Kim Anh, welcome to my online
                        resume! I am currently looking for a fully remote
                        Frontend engineer position. <br></br>
                        <br></br>As a passionate developer with a keen
                        appreciation for minimalist yet strong concepts, I
                        always keep an eye out for innovative and smooth UX.
                        Despite my near obsession for pixel perfect interfaces,
                        I always strive for quick iteration and timely product
                        delivery. <br></br>
                        <br></br> My other passions include eating out,
                        travelling, hiking and most recently, searching for the
                        finest onsen in Japan. On my free time, I curate an
                        online compilation of restaurants with my brother - a
                        side project I very much enjoy as it blends my love for
                        food and coding &nbsp;
                        <a
                            href="https://kimanhou.github.io/the-culinary-passport/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLink} />
                        </a>
                        . Another side project I have is an online tool for
                        learning the names of Pokemon in Japanese &nbsp;
                        <a
                            href="https://kimanhou.github.io/pokelingo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLink} />
                        </a>
                        .
                    </p>
                    <SlackReactionContainer />
                </div>
            </div>
        </div>
    );
};

export default IntroBox2;
