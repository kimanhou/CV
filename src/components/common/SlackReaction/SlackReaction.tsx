import { Dispatch, FC, useState } from "react";
import "./SlackReaction.scss";

interface ISlackReactionProps {
    emoji: string;
    count: number;
    userReacted: boolean;
    setUserReacted: Dispatch<React.SetStateAction<boolean>>;
    setCount: Dispatch<React.SetStateAction<number>>;
}

const SlackReaction: FC<ISlackReactionProps> = (props) => {
    const onClick = () => {
        if (props.userReacted) {
            props.setCount((t) => t - 1);
        } else {
            props.setCount((t) => t + 1);
        }

        props.setUserReacted((t) => !t);
    };

    return (
        <div
            className={`slack-reaction flex-row ${
                props.userReacted ? "reacted" : ""
            }`}
            onClick={onClick}
        >
            <span>{props.emoji}</span>
            <span className="count">{props.count}</span>
        </div>
    );
};

export default SlackReaction;
