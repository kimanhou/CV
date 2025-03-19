import { Dispatch, FC, SetStateAction } from "react";
import Toggle from "@/components/common/Toggle/Toggle";
import darkModeIcon from "@/img/darkModeIcon.png";
import lightModeIcon from "@/img/lightModeIcon.png";
import styles from "./DarkModeToggle.module.scss";

interface IDarkModeToggleProps {
    isDarkMode: boolean;
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

const DarkModeToggle: FC<IDarkModeToggleProps> = ({
    isDarkMode,
    setIsDarkMode,
}: IDarkModeToggleProps) => {
    return (
        <div className={styles.darkModeSwitchContainer}>
            <img
                src={lightModeIcon}
                className={styles.darkModeSwitchIcon}
                onClick={() => setIsDarkMode(false)}
            />
            <Toggle
                checked={isDarkMode}
                onChange={() => setIsDarkMode((t) => !t)}
                disabled={false}
            />
            <img
                src={darkModeIcon}
                className={styles.darkModeSwitchIcon}
                onClick={() => setIsDarkMode(true)}
            />
        </div>
    );
};

export default DarkModeToggle;
