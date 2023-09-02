import React from "react";
import "./Skills.scss";
import SkillsBlock from "./SkillsBlock";

const Skills: React.FC = (props) => {
    return (
        <section id="skills">
            <div className="skills-list-container">
                <ul id="skills-block-list">
                    <li>
                        <SkillsBlock
                            date="From Sep 2013 to Sep 2015"
                            location="Tokyo, Japan"
                            text="Master’s degree at Keio University"
                        />
                    </li>
                    <li>
                        <SkillsBlock
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

export default Skills;
