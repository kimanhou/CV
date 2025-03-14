import { FC } from "react";
import styles from "./SkillsBlock.module.scss";

interface ISkillsBlockProps {
    iconSrc: string;
    children: JSX.Element;
}

const SkillsBlock: FC<ISkillsBlockProps> = (props) => {
    return (
        <div className={styles.skillsBlock}>
            <div className={styles.skillsBlockIconContainer}>
                <img src={props.iconSrc} alt={`Skill icon`} />
            </div>
            {props.children}
        </div>
    );
};

export default SkillsBlock;
