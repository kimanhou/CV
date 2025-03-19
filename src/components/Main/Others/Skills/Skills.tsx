import { FC } from "react";
import SkillsBlock from "./SkillsBlock";
import SkillsFramework from "./SkillsFramework";
import construction from "@/img/construction.png";
import language from "@/img/language.png";
import react from "@/img/react.png";
import tool from "@/img/tool.png";
import vue from "@/img/vue.png";
import styles from "./Skills.module.scss";

const Skills: FC = (props) => {
    return (
        <section className={styles.skills}>
            <h4 className={styles.skillsTitle}>Skills</h4>
            <div className={styles.skillsListContainer}>
                <ul className={styles.skillsBlockList}>
                    <li>
                        <SkillsBlock
                            iconSrc={language}
                            children={<>TypeScript, JavaScript, HTML/CSS</>}
                        />
                    </li>
                    <li>
                        <SkillsBlock
                            iconSrc={construction}
                            children={
                                <>
                                    <SkillsFramework
                                        text="React"
                                        iconSrc={react}
                                    />
                                    <SkillsFramework
                                        text="Vue.js"
                                        iconSrc={vue}
                                    />
                                </>
                            }
                        />
                    </li>
                    <li>
                        <SkillsBlock
                            iconSrc={tool}
                            children={
                                <>
                                    Git, Jenkins,<br></br> Webpack, Vite,
                                    Storybook
                                </>
                            }
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;
