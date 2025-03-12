import { FC } from "react";
import { MainTabEnum } from "../Main";
import styles from "./SecondaryNavigation.module.scss";

interface ISecondaryNavigationProps {
    activeTab: MainTabEnum;
    setActiveTab: (activeTab: MainTabEnum) => void;
}

const SecondaryNavigation: FC<ISecondaryNavigationProps> = (props) => {
    const tabs = [MainTabEnum.WORK, MainTabEnum.OTHERS];
    const isActiveClassname = (tab: MainTabEnum) =>
        tab.toLocaleLowerCase() === props.activeTab.toLocaleLowerCase()
            ? styles.active
            : "";

    return (
        <div className={styles.secondaryNavigation} id="secondary-navigation">
            <div className={styles.secondaryNavigationTabsContainer}>
                {tabs.map((tab) => (
                    <div className={styles.secondaryNavigationTab} key={tab}>
                        <span
                            className={`${isActiveClassname(tab)}`}
                            onClick={() => props.setActiveTab(tab)}
                        >
                            {tab}
                        </span>

                        <div className={styles.secondaryNavigationBottomLine}>
                            <div
                                className={`${
                                    styles.secondaryNavigationBottomLineBlack
                                } ${isActiveClassname(tab)}`}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.secondaryNavigationBottomLineGrey}></div>
        </div>
    );
};

export default SecondaryNavigation;
