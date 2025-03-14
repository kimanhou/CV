import { FC } from "react";
import Education from "@/components/Main/Others/Education/Education";
import Skills from "@/components/Main/Others/Skills/Skills";
import Hobbies from "@/components/Main/Others/Hobbies/Hobbies";
import styles from "./Others.module.scss";

const Others: FC = (props) => {
    return (
        <div className={styles.others} id="others">
            <Education />
            <Skills />
            <Hobbies />
        </div>
    );
};

export default Others;
