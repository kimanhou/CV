import { FC } from "react";
import SkillsBlock from "./SkillsBlock";
import construction from "./construction.png";
import language from "./language.png";
import react from "./react.png";
import tool from "./tool.png";
import vue from "./vue.png";
import SkillsFramework from "./SkillsFramework";
import "./Skills.scss";

const Skills: FC = (props) => {
    return (
        <section id="skills">
            <div className="skills-title">Skills</div>
            <div className="skills-list-container flex-row">
                <ul id="skills-block-list">
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
                                        text="Vue.js"
                                        iconSrc={vue}
                                    />
                                    <SkillsFramework
                                        text="React"
                                        iconSrc={react}
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
                                    GitHub, npm, Jenkins, Webpack,<br></br>
                                    Jest, Storybook
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
