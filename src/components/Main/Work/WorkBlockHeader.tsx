import { FC } from "react";
import styles from "./WorkBlockHeader.module.scss";

interface IWorkBlockHeaderProps {
    date: string;
    location: string;
    isCurrentPosition: boolean;
}

const WorkBlockHeader: FC<IWorkBlockHeaderProps> = (props) => {
    return (
        <div className={styles.workBlockHeader}>
            From <b>{props.date}</b>
            <span className={styles.workBlockHeaderLocation}>
                &#x2022; {props.location}
            </span>
            {props.isCurrentPosition && (
                <span className={styles.workBlockHeaderCurrentPosition}>
                    ⭐ Current position
                </span>
            )}
        </div>
    );
};

export default WorkBlockHeader;
