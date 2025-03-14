import { FC, useState } from "react";
import styles from "./DownloadButton.module.scss";

const DownloadButton: FC = (props) => {
    const [loadClassname, setLoadClassname] = useState("");

    const onClickDownload = () => {
        setLoadClassname(styles.load);
        setTimeout(() => {
            setLoadClassname(`${styles.load} ${styles.done}`);
            setTimeout(() => {
                setLoadClassname("");
            }, 4000);
        }, 1000);
    };

    return (
        <div
            className={`${styles.btnCircleDownload} ${loadClassname}`}
            onClick={onClickDownload}
            role="button"
        >
            <svg
                className={styles.arrow}
                width="14px"
                height="20px"
                viewBox="17 14 14 20"
            >
                <path d="M24,15 L24,32"></path>
                <polyline points="30 27 24 33 18 27"></polyline>
            </svg>
            <svg
                className={styles.check}
                width="21px"
                height="15px"
                viewBox="13 17 21 15"
            >
                <polyline points="32.5 18.5 20 31 14.5 25.5"></polyline>
            </svg>
            <svg
                className={styles.border}
                width="48px"
                height="48px"
                viewBox="0 0 48 48"
            >
                <path d="M24,1 L24,1 L24,1 C36.7025492,1 47,11.2974508 47,24 L47,24 L47,24 C47,36.7025492 36.7025492,47 24,47 L24,47 L24,47 C11.2974508,47 1,36.7025492 1,24 L1,24 L1,24 C1,11.2974508 11.2974508,1 24,1 L24,1 Z"></path>
            </svg>
        </div>
    );
};

export default DownloadButton;
