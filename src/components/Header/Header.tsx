import React from "react";
import { MainTabEnum } from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

interface IHeaderProps {
    setActiveTab: (activeTab: MainTabEnum) => void;
}

export const Header: React.FC<IHeaderProps> = (props) => {
    return (
        <header className="flex-row">
            <Navigation setActiveTab={props.setActiveTab} />
        </header>
    );
};
