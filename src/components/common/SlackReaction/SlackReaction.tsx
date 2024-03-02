import { FC, useState } from "react";
import "./SlackReaction.scss";

interface ISlackReactionProps {
    emoji: string;
    count: number;
    userReacted: boolean;
}

const SlackReaction: FC<ISlackReactionProps> = (props) => {
    const [reacted, setReacted] = useState(props.userReacted);
    const [count, setCount] = useState(props.count);

    const onClick = () => {
        if (reacted) {
            setCount((t) => t - 1);
        } else {
            setCount((t) => t + 1);
        }

        setReacted((t) => !t);
    };

    return (
        <div
            className={`slack-reaction flex-row ${reacted ? "reacted" : ""}`}
            onClick={onClick}
        >
            <div className="emoji">{props.emoji}</div>
            <div className="count">{count}</div>
        </div>
    );
};

export default SlackReaction;
