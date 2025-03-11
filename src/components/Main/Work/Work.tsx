import { FC } from "react";
import WorkBlock from "./WorkBlock";
import "./Work.scss";

export enum WorkEnum {
    SOCGEN = "Société Générale",
    WORLD_TRIP = "World trip",
    RAKUTEN = "Rakuten",
}

export const Work: FC = (props) => {
    return (
        <section id="work">
            <div className="c-container c-container--top">
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
            </div>
        </section>
    );
};
