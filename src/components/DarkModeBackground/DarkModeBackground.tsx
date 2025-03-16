import { FC } from "react";
import styles from "./DarkModeBackground.module.scss";

interface IDarkModeBackgroundProps {
    isActive: boolean;
    children: JSX.Element | JSX.Element[];
}

const DarkModeBackground: FC<IDarkModeBackgroundProps> = (props) => {
    const activeClassName = props.isActive ? styles.active : "";
    return (
        <div className={`${styles.darkModeBackground} ${activeClassName}`}>
            {props.children}
        </div>
    );
};

export default DarkModeBackground;
