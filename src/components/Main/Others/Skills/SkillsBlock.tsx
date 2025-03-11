import { FC } from "react";

interface ISkillsBlockProps {
    iconSrc: string;
    children: JSX.Element;
}

const SkillsBlock: FC<ISkillsBlockProps> = (props) => {
    return (
        <div className="skills-block flex-row">
            <div className="skills-block-icon-container flex-row">
                <img src={props.iconSrc} alt={`Skill icon`} />
            </div>
            {props.children}
        </div>
    );
};

export default SkillsBlock;
