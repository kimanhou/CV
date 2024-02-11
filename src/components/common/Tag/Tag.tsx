import React from "react";
import "./Tag.scss";

interface ITagProps {
    tag: string;
    noMarginRight?: boolean;
}

const Tag: React.FC<ITagProps> = (props) => {
    const noMarginRightClassName = props.noMarginRight ? "no-margin-right" : "";

    return <div className={`tag ${noMarginRightClassName}`}>{props.tag}</div>;
};

export default Tag;
