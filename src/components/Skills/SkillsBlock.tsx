import React from "react";

interface ISkillsBlockProps {
    date: string;
    location: string;
    text: string;
}

const SkillsBlock: React.FC<ISkillsBlockProps> = (props) => {
    return (
        <div className="skills-block">
            <div className="skills-block-header">
                {props.date} &#x2022; {props.location}
            </div>
            <h2>{props.text}</h2>
        </div>
    );
};

export default SkillsBlock;
