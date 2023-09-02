import React from "react";
import "./SecondaryNavigation.scss";

interface ISecondaryNavigationProps {
    activeTab: string;
}

const SecondaryNavigation: React.FC<ISecondaryNavigationProps> = (props) => {
    const tabs = ["Work", "Education"];
    const isActiveClassname = (tab: string) =>
        tab.toLocaleLowerCase() === props.activeTab.toLocaleLowerCase()
            ? "active"
            : "";

    return (
        <div id="secondary-navigation">
            <div className="secondary-navigation-tabs-container flex-row">
                {tabs.map((tab) => (
                    <span className={`${isActiveClassname(tab)}`}>{tab}</span>
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
