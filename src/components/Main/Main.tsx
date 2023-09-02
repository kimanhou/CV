import React from "react";
import Others from "../Others/Others";
import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";
import { Work } from "../Work/Work";
import "./Main.scss";

const Main: React.FC = (props) => {
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
                <SecondaryNavigation activeTab="Work" />
                <Work />
                <Others />
            </div>
        </section>
    );
};

export default Main;
