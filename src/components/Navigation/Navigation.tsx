import React from "react";
import "./Navigation.scss";
import NavigationLink from "./NavigationLink";

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = (props) => {
    return (
        <div id="navigation" className={`flex-row`}>
            <NavigationLink to="/" selected={true}>
                Intro
            </NavigationLink>
            <NavigationLink to="secondary-navigation" selected={true}>
                Work
            </NavigationLink>
            <NavigationLink to="secondary-navigation" selected={false}>
                Education &amp; others
            </NavigationLink>
        </div>
    );
};

export default Navigation;
