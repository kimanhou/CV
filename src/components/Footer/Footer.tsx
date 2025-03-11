import { SocialBar } from "../Social";
import pattern from "@/img/pattern.svg";
import "./Footer.scss";

export const Footer: React.FC = (props) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div
                id="footer-background"
                style={{
                    backgroundImage: `url(${pattern})`,
                }}
            />
            <svg
                className="triangle"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="none"
                viewBox="0 0 1920 480"
                xmlSpace="preserve"
            >
                <polygon points="0,480 0,0 1920,0 "></polygon>
            </svg>
            <div id="footer-content">
                <div className="info">
                    <SocialBar />
                    <p>Made with &#128420; &copy; {currentYear}</p>
                </div>
            </div>
        </footer>
    );
};
