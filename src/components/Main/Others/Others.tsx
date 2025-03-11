import { FC } from "react";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Hobbies from "./Hobbies/Hobbies";
import "./Others.scss";

const Others: FC = (props) => {
    return (
        <div id="others">
            <Education />
            <Skills />
            <Hobbies />
        </div>
    );
};

export default Others;
