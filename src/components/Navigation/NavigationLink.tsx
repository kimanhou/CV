import "./NavigationLink.scss";
import { Link, useLocation, matchPath } from "react-router-dom";
import { scrollTo } from "./utils";

interface INavigationLinkProps {
    to: string;
    selected: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

const NavigationLink: React.FC<INavigationLinkProps> = (props) => {
    const { pathname } = useLocation();
    const selectedClassName = matchPath(pathname, props.to) ? "selected" : "";

    const onClick = () => {
        if (props.onClick) {
            props.onClick();
        }
        scrollTo({ elementId: props.to });
    };

    return (
        <Link
            className={`navigation-link ${selectedClassName}`}
            to=""
            onClick={onClick}
        >
            <div className="text grey">{props.children}</div>
            <div className="text">{props.children}</div>
        </Link>
    );
};

export default NavigationLink;
