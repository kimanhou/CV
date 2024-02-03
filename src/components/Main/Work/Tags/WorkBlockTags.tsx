import React from "react";
import "./WorkBlockTags.scss";

interface IWorkBlockTagsProps {
    tags: string[];
}

const WorkBlockTags: React.FC<IWorkBlockTagsProps> = (props) => {
    return (
        <div className="work-block-tags flex-row">
            {props.tags.map((tag, i) => (
                <div className="work-block-tag" key={i}>
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default WorkBlockTags;
