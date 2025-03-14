import { FC } from "react";
import WorkBlock from "@/components/Main/Work/WorkBlock";
import styles from "./Work.module.scss";

export enum WorkEnum {
    SOCGEN = "Société Générale",
    WORLD_TRIP = "World trip",
    RAKUTEN = "Rakuten",
}

export const Work: FC = (props) => {
    return (
        <section className={styles.work} id="work">
            <div className={styles.container}>
                <ul className={styles.workBlockList}>
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
