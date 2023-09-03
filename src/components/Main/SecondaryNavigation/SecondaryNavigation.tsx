import React from "react";
import { MainTabEnum } from "../Main";
import "./SecondaryNavigation.scss";

interface ISecondaryNavigationProps {
    activeTab: MainTabEnum;
    setActiveTab: (activeTab: MainTabEnum) => void;
}

const SecondaryNavigation: React.FC<ISecondaryNavigationProps> = (props) => {
    const tabs = [MainTabEnum.WORK, MainTabEnum.OTHERS];
    const isActiveClassname = (tab: MainTabEnum) =>
        tab.toLocaleLowerCase() === props.activeTab.toLocaleLowerCase()
            ? "active"
            : "";

    return (
        <div id="secondary-navigation">
            <div className="secondary-navigation-tabs-container flex-row">
                {tabs.map((tab) => (
                    <span
                        key={tab}
                        className={`${isActiveClassname(tab)}`}
                        onClick={() => props.setActiveTab(tab)}
                    >
                        {tab}
                    </span>
                ))}
            </div>

            <div className="secondary-navigation-bottom-line flex-row">
                <div className="secondary-navigation-bottom-line-black"></div>
                <div className="secondary-navigation-bottom-line-grey"></div>
            </div>
        </div>
    );
};

export default SecondaryNavigation;
