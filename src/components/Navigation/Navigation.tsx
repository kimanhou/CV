import React from "react";
import "./Navigation.scss";
import NavigationLink from "./NavigationLink";

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = (props) => {
    return (
        <div id="navigation" className={`flex-row`}>
            <NavigationLink to="/" selected={true}>
                Accueil
            </NavigationLink>
            <NavigationLink to="/about" selected={true}>
                À propos
            </NavigationLink>
            <NavigationLink to="/shop" selected={false}>
                Boutique
            </NavigationLink>
            <NavigationLink to="/contact" selected={false}>
                Contact
            </NavigationLink>
        </div>
    );
};

export default Navigation;
