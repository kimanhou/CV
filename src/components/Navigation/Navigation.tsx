import { FC, useState } from "react";
import { MainTabEnum, RESIZABLE_THRESHOLD } from "../Main/Main";
import NavigationLink from "./NavigationLink";
import styles from "./Navigation.module.scss";

interface INavigationProps {
    setActiveTab: (activeTab: MainTabEnum) => void;
}

const Navigation: FC<INavigationProps> = (props) => {
    const getTo = (tabId: string) => {
        return window.innerWidth < RESIZABLE_THRESHOLD
            ? "secondary-navigation"
            : tabId;
    };

    const [educationTo, setEducationTo] = useState<string>(getTo("others"));
    const [workTo, setWorkTo] = useState<string>(getTo("work"));

    window.addEventListener("resize", () => {
        setEducationTo(getTo("others"));
        setWorkTo(getTo("work"));
    });

    const onTabClick = (activeTab: MainTabEnum) => {
        props.setActiveTab(activeTab);
    };

    return (
        <div className={styles.navigation}>
            <NavigationLink to="/" selected={true}>
                Intro
            </NavigationLink>
            <NavigationLink
                to={workTo}
                selected={true}
                onClick={() => onTabClick(MainTabEnum.WORK)}
            >
                Work
            </NavigationLink>
            <NavigationLink
                to={educationTo}
                selected={false}
                onClick={() => onTabClick(MainTabEnum.OTHERS)}
            >
                {window.innerWidth < RESIZABLE_THRESHOLD
                    ? "Education & others"
                    : "Education"}
            </NavigationLink>
        </div>
    );
};

export default Navigation;
