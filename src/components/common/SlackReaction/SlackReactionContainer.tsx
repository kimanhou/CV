import { Dispatch, FC, useState } from "react";
import SlackReaction from "components/common/SlackReaction/SlackReaction";
import "./SlackReactionContainer.scss";
import SlackAddReactionButton from "./SlackAddReactionButton";

interface ISlackReactionContainerProps {
    reactions: Array<{
        emoji: string;
        count: number;
        userReacted: boolean;
    }>;
}

const SlackReactionContainer: FC<ISlackReactionContainerProps> = (props) => {
    const [slackReactions, setSlackReactions] = useState(props.reactions);
    const reacted = slackReactions
        .filter((t) => t.userReacted)
        .sort((a, b) => b.count - a.count);
    const unreacted = slackReactions
        .filter((t) => !t.userReacted)
        .sort((a, b) => b.count - a.count);

    const addEmoji = (emoji: string) => {
        setSlackReactions((t) => [
            ...t,
            { emoji, count: 1, userReacted: true },
        ]);
    };

    const updateUserReacted: (
        emoji: string
    ) => Dispatch<React.SetStateAction<boolean>> =
        (emoji: string) =>
        (updateFunc: boolean | ((a: boolean) => boolean)) => {
            setSlackReactions((t) => {
                const myReaction = t.find((x) => x.emoji === emoji);
                if (!myReaction) return t;

                const clone = t.filter((x) => x.emoji !== emoji);
                return [
                    ...clone,
                    {
                        emoji: myReaction.emoji,
                        count: myReaction.count,
                        userReacted:
                            typeof updateFunc === "function"
                                ? updateFunc(myReaction.userReacted)
                                : updateFunc,
                    },
                ];
            });
        };

    const updateCount: (
        emoji: string
    ) => Dispatch<React.SetStateAction<number>> =
        (emoji: string) => (updateFunc: number | ((a: number) => number)) => {
            setSlackReactions((t) => {
                const clone = t.filter((x) => x.emoji !== emoji);
                const myReaction = t.find((x) => x.emoji === emoji);

                if (!myReaction) return t;

                const updatedCount =
                    typeof updateFunc === "function"
                        ? updateFunc(myReaction.count)
                        : updateFunc;
                if (updatedCount === 0) return clone;

                return [
                    ...clone,
                    {
                        emoji: myReaction.emoji,
                        count: updatedCount,
                        userReacted: myReaction.userReacted,
                    },
                ];
            });
        };

    return (
        <div className="slack-reaction-container flex-row">
            {reacted.map((reaction) => (
                <SlackReaction
                    {...reaction}
                    key={reaction.emoji}
                    setUserReacted={updateUserReacted(reaction.emoji)}
                    setCount={updateCount(reaction.emoji)}
                />
            ))}
            {unreacted.map((reaction) => (
                <SlackReaction
                    {...reaction}
                    key={reaction.emoji}
                    setUserReacted={updateUserReacted(reaction.emoji)}
                    setCount={updateCount(reaction.emoji)}
                />
            ))}
            <SlackAddReactionButton addEmoji={addEmoji} />
        </div>
    );
};

export default SlackReactionContainer;
