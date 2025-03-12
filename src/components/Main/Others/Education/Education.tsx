import { FC } from "react";
import EducationBlock from "@/components/Main/Others/Education/EducationBlock";
import styles from "./Education.module.scss";

const Education: FC = (props) => {
    return (
        <section className={styles.education}>
            <div className={styles.educationListContainer}>
                <ul className={styles.educationBlockList}>
                    <li>
                        <EducationBlock
                            date="From Sep 2013 to Sep 2015"
                            location="Tokyo, Japan"
                            text="Master’s degree at Keio University"
                        />
                    </li>
                    <li>
                        <EducationBlock
                            date="From Sep 2011 to Sep 2013"
                            location="Marseille, France"
                            text="Master’s degree at Centrale Marseille"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Education;
