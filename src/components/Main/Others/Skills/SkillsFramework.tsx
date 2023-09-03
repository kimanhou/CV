import React from "react";

interface ISkillsFrameworkProps {
    iconSrc: string;
    text: string;
}

const SkillsFramework: React.FC<ISkillsFrameworkProps> = (props) => {
    return (
        <div className="skills-framework flex-row">
            <span>{props.text}</span>
            <img
                src={props.iconSrc}
                alt={`Skill framework ${props.text} icon`}
            />
        </div>
    );
};

export default SkillsFramework;
