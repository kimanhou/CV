import React, { useState } from "react";
import Others from "../Others/Others";
import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";
import { Work } from "../Work/Work";
import "./Main.scss";

export enum MainTabEnum {
    WORK = "Work",
    OTHERS = "Education & others",
}

const Main: React.FC = (props) => {
    const [activeTab, setActiveTab] = useState<MainTabEnum>(MainTabEnum.WORK);

    return (
        <section id="main">
            <svg
                className="p-work__triangle"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="none"
                viewBox="0 0 1920 480"
                xmlSpace="preserve"
            >
                <polygon
                    points="1920,480 0,0 1920,0 "
                    fill="lightpink"
                ></polygon>
            </svg>
            <div className="c-container c-container--top">
                <SecondaryNavigation
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                {activeTab.toLocaleLowerCase() === "work" && <Work />}
                {activeTab.toLocaleLowerCase() !== "work" && <Others />}
            </div>
        </section>
    );
};

export default Main;
