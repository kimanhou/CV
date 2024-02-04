import React from "react";
import Tag from "./Tag";

interface IWorkBlockTagsProps {
    tags: string[];
}

const WorkBlockTags: React.FC<IWorkBlockTagsProps> = (props) => {
    return (
        <div className="work-block-tags flex-row" style={{ marginTop: "2rem" }}>
            {props.tags.map((tag, i) => (
                <Tag tag={tag} key={i} />
            ))}
        </div>
    );
};

export default WorkBlockTags;
