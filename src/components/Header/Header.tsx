import { FC } from "react";
import { MainTabEnum } from "@/components/Main/Main";
import Navigation from "@/components/Navigation/Navigation";
import styles from "./Header.module.scss";

interface IHeaderProps {
    setActiveTab: (activeTab: MainTabEnum) => void;
}

const Header: FC<IHeaderProps> = (props) => {
    return (
        <header className={styles.header}>
            <Navigation setActiveTab={props.setActiveTab} />
        </header>
    );
};

export default Header;
