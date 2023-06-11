import React from "react";
import "./Footer.scss";

export const Footer: React.FC = (props) => {
    return (
        <footer>
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
            <div className="bg">
                <div className="bg__container">
                    <div className="bg__wrapper"></div>
                    <div className="bg__main">
                        <div className="bg__container">
                            <div className="logo">
                                <img
                                    src="./logo--white.svg"
                                    alt="KA logo white"
                                />
                            </div>
                            <div className="info">
                                <div className="info__sns">
                                    <a
                                        className="info__sns__link info__sns__link--facebook"
                                        href="https://www.facebook.com/bakecheesetart/"
                                        target="_blank"
                                    >
                                        <span className="c-icon c-icon--facebook_round"></span>
                                        <span className="is-hidden">Mail</span>
                                    </a>
                                    <a
                                        className="info__sns__link info__sns__link--twitter"
                                        href="https://twitter.com/bakecheesetart"
                                        target="_blank"
                                    >
                                        <span className="c-icon c-icon--twitter_round"></span>
                                        <span className="is-hidden">
                                            LinkedIn
                                        </span>
                                    </a>
                                    <a
                                        className="info__sns__link info__sns__link--instagram"
                                        href="https://www.instagram.com/bakecheesetart/"
                                        target="_blank"
                                    >
                                        <span className="c-icon c-icon--instagram_round"></span>
                                        <span className="is-hidden">
                                            Github
                                        </span>
                                    </a>
                                </div>
                                <p className="info__copy">
                                    Made with &#129293; &copy; 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
