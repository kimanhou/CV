import { FC } from "react";
import { SocialBar } from "@/components/Social";
import pattern from "@/img/pattern.svg";
import styles from "./Footer.module.scss";

const Footer: FC = (props) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div
                className={styles.footerBackground}
                style={{
                    backgroundImage: `url(${pattern})`,
                }}
            />
            <svg
                className={styles.footerTriangle}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="none"
                viewBox="0 0 1920 480"
                xmlSpace="preserve"
            >
                <polygon points="0,480 0,0 1920,0 "></polygon>
            </svg>
            <div className={styles.footerContent}>
                <div className={styles.footerInfo}>
                    <SocialBar hasMarginBottom />
                    <p>Made with &#128420; &copy; {currentYear}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
