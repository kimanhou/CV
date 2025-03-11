import { FC } from "react";
import "./Tag.scss";

interface ITagProps {
    tag: string;
    noMarginRight?: boolean;
}

const Tag: FC<ITagProps> = (props) => {
    const noMarginRightClassName = props.noMarginRight ? "no-margin-right" : "";

    return <div className={`tag ${noMarginRightClassName}`}>{props.tag}</div>;
};

export default Tag;
