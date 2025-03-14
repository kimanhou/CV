import { FC } from "react";
import styles from "./SecondaryTitle.module.scss";

interface ISecondaryTitleProps {
    title: string;
}

const SecondaryTitle: FC<ISecondaryTitleProps> = (props) => {
    return (
        <div className={styles.secondaryTitle}>
            <h3>{props.title}</h3>
            <div className={styles.secondaryTitleBottomLine}>
                <div className={styles.secondaryTitleBottomLineBlack}></div>
                <div className={styles.secondaryTitleBottomLineGrey}></div>
            </div>
        </div>
    );
};

export default SecondaryTitle;
