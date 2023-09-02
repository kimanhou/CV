import React from "react";
import Education from "../Education/Education";
import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";
import "./Work.scss";
import WorkBlock from "./WorkBlock";

export enum WorkEnum {
    SOCGEN = "Société Générale",
    WORLD_TRIP = "World trip",
    RAKUTEN = "Rakuten",
}

export const Work: React.FC = (props) => {
    return (
        <section id="work">
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
                <ul id="work-block-list">
                    <li>
                        <WorkBlock company={WorkEnum.RAKUTEN} />
                    </li>
                    <li>
                        <WorkBlock company={WorkEnum.WORLD_TRIP} />
                    </li>
                    <li>
                        <WorkBlock company={WorkEnum.SOCGEN} />
                    </li>
                </ul>
                <Education />
            </div>
        </section>
    );
};
