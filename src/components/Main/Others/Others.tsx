import React from "react";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Hobbies from "./Hobbies/Hobbies";

const Others: React.FC = (props) => {
    return (
        <div id="others">
            <Education />
            <Skills />
            <Hobbies />
        </div>
    );
};

export default Others;
