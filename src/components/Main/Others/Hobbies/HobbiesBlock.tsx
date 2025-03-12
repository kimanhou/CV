import { FC } from "react";
import styles from "./HobbiesBlock.module.scss";

interface IHobbiesBlockProps {
    iconSrc: string;
    text: string;
}

const HobbiesBlock: FC<IHobbiesBlockProps> = (props) => {
    return (
        <div className={styles.hobbiesBlock}>
            <img src={props.iconSrc} alt={`Hobby ${props.text} icon`} />
            <span>{props.text}</span>
        </div>
    );
};

export default HobbiesBlock;
