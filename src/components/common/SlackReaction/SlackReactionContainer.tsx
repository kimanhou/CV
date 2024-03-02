import { FC } from "react";
import SlackReaction from "components/common/SlackReaction/SlackReaction";
import "./SlackReactionContainer.scss";

interface ISlackReactionContainerProps {
    reactions: Array<{
        emoji: string;
        count: number;
        userReacted: boolean;
    }>;
}

const SlackReactionContainer: FC<ISlackReactionContainerProps> = (props) => {
    const reacted = props.reactions.filter((t) => t.userReacted);
    const unreacted = props.reactions.filter((t) => !t.userReacted);

    return (
        <div className="slack-reaction-container flex-row">
            {reacted.map((reaction) => (
                <SlackReaction {...reaction} key={reaction.emoji} />
            ))}
            {unreacted.map((reaction) => (
                <SlackReaction {...reaction} key={reaction.emoji} />
            ))}
        </div>
    );
};

export default SlackReactionContainer;
