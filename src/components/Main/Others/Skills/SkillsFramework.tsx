import { FC } from "react";
import styles from "./SkillsFramework.module.scss";

interface ISkillsFrameworkProps {
    iconSrc: string;
    text: string;
}

const SkillsFramework: FC<ISkillsFrameworkProps> = (props) => {
    return (
        <div className={styles.skillsFramework}>
            <span>{props.text}</span>
            <img
                src={props.iconSrc}
                alt={`Skill framework ${props.text} icon`}
            />
        </div>
    );
};

export default SkillsFramework;
