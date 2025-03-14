import { FC } from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { scrollTo } from "./utils";
import styles from "./NavigationLink.module.scss";

interface INavigationLinkProps {
    to: string;
    selected: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

const NavigationLink: FC<INavigationLinkProps> = (props) => {
    const { pathname } = useLocation();
    const selectedClassName = matchPath(pathname, props.to)
        ? styles.selected
        : "";

    const onClick = () => {
        if (props.onClick) {
            props.onClick();
        }
        scrollTo({ elementId: props.to });
    };

    return (
        <Link
            className={`${styles.navigationLink} ${selectedClassName}`}
            to=""
            onClick={onClick}
        >
            <div className={`${styles.text} ${styles.grey}`}>
                {props.children}
            </div>
            <div className={styles.text}>{props.children}</div>
        </Link>
    );
};

export default NavigationLink;
