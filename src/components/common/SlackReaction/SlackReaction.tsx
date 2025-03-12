import { Dispatch, FC, SetStateAction } from "react";
import styles from "./SlackReaction.module.scss";

interface ISlackReactionProps {
    emoji: string;
    count: number;
    userReacted: boolean;
    setUserReacted: Dispatch<SetStateAction<boolean>>;
    setCount: Dispatch<SetStateAction<number>>;
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
            className={`${styles.slackReaction} ${
                props.userReacted ? styles.reacted : ""
            }`}
            onClick={onClick}
        >
            <span>{props.emoji}</span>
            <span className={styles.count}>{props.count}</span>
        </div>
    );
};

export default SlackReaction;
