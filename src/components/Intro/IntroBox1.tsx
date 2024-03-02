import { FC } from "react";
import avatar from "./avatar.png";
import "./IntroBox1.scss";

interface IIntroBox1Props {
    height?: string;
}

export const IntroBox1: FC<IIntroBox1Props> = (props) => {
    return (
        <div
            id="intro-box-1-container"
            className="flex-row"
            style={{ height: props.height }}
        >
            <div
                id="intro-box-1"
                className="flex-1 flex-column intro-box"
                style={{
                    backgroundImage: `url(${avatar})`,
                }}
            />
        </div>
    );
};
