import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

export const Header: React.FC = (props) => {
    return (
        <header className="flex-row">
            <img src="./logo--black.svg" alt="KA logo white" />
            <Navigation />
        </header>
    );
};
