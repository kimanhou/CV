import { Dispatch, FC, SetStateAction } from "react";
import { MainTabEnum } from "@/components/Main/Main";
import Navigation from "@/components/Navigation/Navigation";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
import styles from "./Header.module.scss";

interface IHeaderProps {
    setActiveTab: (activeTab: MainTabEnum) => void;
    isDarkMode: boolean;
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<IHeaderProps> = (props) => {
    return (
        <header className={styles.header}>
            <Navigation setActiveTab={props.setActiveTab} />
            <DarkModeToggle
                isDarkMode={props.isDarkMode}
                setIsDarkMode={props.setIsDarkMode}
            />
        </header>
    );
};

export default Header;
