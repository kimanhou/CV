import { FC } from "react";
import avatar from "@/img/avatar.png";
import styles from "./IntroBox1.module.scss";

interface IIntroBox1Props {
    height?: string;
}

const IntroBox1: FC<IIntroBox1Props> = (props) => {
    return (
        <div
            className={styles.introBox1Container}
            style={{ height: props.height }}
        >
            <div
                className={styles.introBox1}
                style={{
                    backgroundImage: `url(${avatar})`,
                }}
            />
        </div>
    );
};

export default IntroBox1;
