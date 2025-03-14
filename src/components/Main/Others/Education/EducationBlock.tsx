import { FC } from "react";
import styles from "./EducationBlock.module.scss";

interface IEducationBlockProps {
    date: string;
    location: string;
    text: string;
}

const EducationBlock: FC<IEducationBlockProps> = (props) => {
    return (
        <div className={styles.educationBlock}>
            <div className={styles.educationBlockHeader}>
                {props.date} &#x2022; {props.location}
            </div>
            <h3>{props.text}</h3>
        </div>
    );
};

export default EducationBlock;
