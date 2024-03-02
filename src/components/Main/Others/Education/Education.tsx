import "./Education.scss";
import EducationBlock from "./EducationBlock";

const Education: React.FC = (props) => {
    return (
        <section id="education">
            <div className="education-list-container">
                <ul id="education-block-list">
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
