import { FC } from "react";
import HobbiesBlock from "@/components/Main/Others/Hobbies/HobbiesBlock";
import travel from "@/img/travel.png";
import tiny from "@/img/tiny.png";
import snorkel from "@/img/snorkel.png";
import music from "@/img/music.png";
import food from "@/img/food.png";
import dog from "@/img/dog.png";
import styles from "./Hobbies.module.scss";

const Hobbies: FC = (props) => {
    return (
        <section className={styles.hobbies}>
            <h4 className={styles.hobbiesTitle}>Hobbies</h4>
            <div className={styles.hobbiesListContainer}>
                <ul className={styles.hobbiesBlockList}>
                    <li>
                        <HobbiesBlock iconSrc={travel} text="Travels" />
                    </li>
                    <li>
                        <HobbiesBlock iconSrc={food} text="Food" />
                    </li>
                    <li>
                        <HobbiesBlock iconSrc={music} text="Music" />
                    </li>
                </ul>
                <ul className={styles.hobbiesBlockList}>
                    <li>
                        <HobbiesBlock iconSrc={snorkel} text="Scuba diving" />
                    </li>
                    <li>
                        <HobbiesBlock iconSrc={dog} text="Dogs" />
                    </li>
                    <li>
                        <HobbiesBlock iconSrc={tiny} text="Tiny living" />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Hobbies;
