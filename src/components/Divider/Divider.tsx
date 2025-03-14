import { FC } from "react";
import pattern from "@/img/pattern.svg";
import styles from "./Divider.module.scss";

const Divider: FC = (props) => {
    return (
        <div className={styles.divider}>
            <div
                className={styles.dividerBackground}
                style={{
                    backgroundImage: `url(${pattern})`,
                }}
            ></div>
            <svg
                className={styles.dividerSvg}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="none"
                viewBox="0 0 1920 960"
                xmlSpace="preserve"
            >
                <polygon points="1920,480 0,0 1920,0"></polygon>
                <polygon points="0,480 0,960 1920, 960"></polygon>
            </svg>
        </div>
    );
};

export default Divider;
