import { Dispatch, FC, useEffect, useState } from "react";
import SlackReaction from "@/components/common/SlackReaction/SlackReaction";
import SlackAddReactionButton from "@/components/common/SlackReaction/SlackAddReactionButton";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
    getSlackReactions,
    setSlackReactions as setSlackReactionsInLocalStorage,
} from "@/localStorageUtils";
import styles from "./SlackReactionContainer.module.scss";

export interface ISlackReaction {
    emoji: string;
    count: number;
    userReacted: boolean;
}

const SlackReactionContainer: FC = () => {
    const isMobile = useIsMobile();
    const [slackReactions, setSlackReactions] = useState<Array<ISlackReaction>>(
        () => {
            const saved = getSlackReactions();
            if (saved == null) {
                return [
                    { emoji: "🎉", count: 2, userReacted: true },
                    { emoji: "❤️", count: 1, userReacted: false },
                    { emoji: "✨", count: 3, userReacted: true },
                ];
            }

            const parsed = JSON.parse(saved);
            return parsed;
        }
    );
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

    useEffect(() => {
        setSlackReactionsInLocalStorage(slackReactions);
    }, [slackReactions]);

    return (
        <div className={styles.slackReactionContainer}>
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
            {!isMobile && <SlackAddReactionButton addEmoji={addEmoji} />}
        </div>
    );
};

export default SlackReactionContainer;
