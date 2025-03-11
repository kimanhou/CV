import "./Divider.scss";

export const Divider: React.FC = (props) => {
    return (
        <div id="divider">
            <div id="divider-background"></div>
            <svg
                id="divider-svg"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="none"
                viewBox="0 0 1920 960"
                xmlSpace="preserve"
            >
                <polygon points="1920,480 0,0 1920,0"></polygon>
                <polygon points="0,480 0,960 1920, 960"></polygon>
            </svg>
        </div>
    );
};
