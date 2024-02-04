import React from "react";
import "./Tag.scss";

interface ITagProps {
    tag: string;
}

const Tag: React.FC<ITagProps> = (props) => {
    return <div className="tag">{props.tag}</div>;
};

export default Tag;
