import React, { useState } from "react";
import { RESIZABLE_THRESHOLD } from "../Main/Main";
import "./Navigation.scss";
import NavigationLink from "./NavigationLink";

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = (props) => {
    const getEducationTo = () => {
        return window.innerWidth < RESIZABLE_THRESHOLD
            ? "secondary-navigation"
            : "others";
    };

    const [educationTo, setEducationTo] = useState<string>(getEducationTo());

    window.addEventListener("resize", () => setEducationTo(getEducationTo()));

    return (
        <div id="navigation" className={`flex-row`}>
            <NavigationLink to="/" selected={true}>
                Intro
            </NavigationLink>
            <NavigationLink to="work" selected={true}>
                Work
            </NavigationLink>
            <NavigationLink to={educationTo} selected={false}>
                Education &amp; others
            </NavigationLink>
        </div>
    );
};

export default Navigation;
