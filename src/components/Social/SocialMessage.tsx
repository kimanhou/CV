import { FC } from "react";
import { SocialMediaEnum } from "@/components/Social/SocialIcon";
import { getMessage } from "./utils";
import styles from "./SocialMessage.module.scss";

interface ISocialMessageProps {
    hoveredIcon: SocialMediaEnum | null;
    media: SocialMediaEnum;
}

const SocialMessage: FC<ISocialMessageProps> = (props) => {
    const isVisibleClassName =
        props.hoveredIcon === props.media ? styles.visible : "";

    const message = getMessage(props.media);

    return (
        <div className={`${styles.socialBarMessage} ${isVisibleClassName}`}>
            {message}
        </div>
    );
};

export default SocialMessage;
