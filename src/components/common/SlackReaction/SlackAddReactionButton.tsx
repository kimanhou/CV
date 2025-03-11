import { FC, useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import "./SlackAddReactionButton.scss";

interface ISlackAddReactionButtonProps {
    addEmoji: (emoji: any) => void;
}

const SlackAddReactionButton: FC<ISlackAddReactionButtonProps> = (props) => {
    const [showPicker, setShowPicker] = useState(false);

    const onClick = () => {
        setShowPicker((t) => !t);
    };

    const onEmojiClick = (emojiData: EmojiClickData, event: MouseEvent) => {
        props.addEmoji(emojiData.emoji);
        setShowPicker(false);
    };

    return (
        <div id="slack-add-reaction-button-container">
            <button id="slack-add-reaction-button" onClick={onClick}>
                +
            </button>
            {showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
        </div>
    );
};

export default SlackAddReactionButton;
