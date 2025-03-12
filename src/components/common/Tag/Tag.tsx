import { FC } from "react";
import styles from "./Tag.module.scss";

interface ITagProps {
    tag: string;
    noMarginRight?: boolean;
}

const Tag: FC<ITagProps> = (props) => {
    const noMarginRightClassName = props.noMarginRight
        ? styles.noMarginRight
        : "";

    return (
        <div className={`${styles.tag} ${noMarginRightClassName}`}>
            {props.tag}
        </div>
    );
};

export default Tag;
