import React from "react";
import "./Footer.scss";

export const Footer: React.FC = (props) => {
    return (
        <footer className="flex-row p-gf">
            <svg
                className="p-gf__triangle"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="none"
                viewBox="0 0 1920 480"
                xmlSpace="preserve"
            >
                <polygon points="0,480 0,0 1920,0 "></polygon>
            </svg>
            <div className="p-gf__bg">
                <div className="p-gf__bg__container">
                    <div className="p-gf__bg__wrapper"></div>
                    <div className="p-gf__bg__main">
                        <div className="c-container">
                            <div className="p-gf__logo">
                                <img
                                    src="https://cheesetart.com/wp-content/themes/bake/assets/images/common/logo--white.svg"
                                    alt="BAKE CHEESE TART"
                                />
                            </div>
                            <div className="p-gf__info">
                                <div className="p-gf__info__local">
                                    <a
                                        className="p-gf__info__local__link c-pagelink"
                                        href="/#bake_cheese_tart"
                                        data-hash="bake_cheese_tart"
                                    >
                                        BAKE CHEESE TART
                                    </a>
                                    <a
                                        className="p-gf__info__local__link c-pagelink"
                                        href="/#essence"
                                        data-hash="essence"
                                    >
                                        ESSENCE
                                    </a>
                                    <a
                                        className="p-gf__info__local__link c-pagelink"
                                        href="/#price"
                                        data-hash="price"
                                    >
                                        PRICE
                                    </a>
                                    <a
                                        className="p-gf__info__local__link c-pagelink"
                                        href="/#bite"
                                        data-hash="bite"
                                    >
                                        HOW TO EAT
                                    </a>
                                    <div>
                                        <a
                                            className="p-gf__info__local__link c-pagelink"
                                            href="/#bake"
                                            data-hash="bake"
                                        >
                                            PHILOSOPHY
                                        </a>
                                        <a
                                            className="p-gf__info__local__link c-pagelink"
                                            href="/shop/"
                                            data-hash="shops"
                                        >
                                            SHOPS
                                        </a>
                                        <a
                                            className="p-gf__info__local__link c-pagelink"
                                            href="/news/"
                                            data-hash="news"
                                        >
                                            NEWS
                                        </a>
                                        <a
                                            className="p-gf__info__local__link c-pagelink"
                                            href="/#contact"
                                            data-hash="contact"
                                        >
                                            CONTACT - FAQ
                                        </a>
                                    </div>
                                </div>
                                <ul className="p-gf__info__sns">
                                    <li>
                                        <a
                                            className="p-gf__info__sns__link p-gf__info__sns__link--facebook"
                                            href="https://www.facebook.com/bakecheesetart/"
                                            target="_blank"
                                        >
                                            <span className="c-icon c-icon--facebook_round"></span>
                                            <span className="is-hidden">
                                                Facebook
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="p-gf__info__sns__link p-gf__info__sns__link--twitter"
                                            href="https://twitter.com/bakecheesetart"
                                            target="_blank"
                                        >
                                            <span className="c-icon c-icon--twitter_round"></span>
                                            <span className="is-hidden">
                                                Twitter
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="p-gf__info__sns__link p-gf__info__sns__link--instagram"
                                            href="https://www.instagram.com/bakecheesetart/"
                                            target="_blank"
                                        >
                                            <span className="c-icon c-icon--instagram_round"></span>
                                            <span className="is-hidden">
                                                Instagram
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <p className="p-gf__info__copy">
                                    Copyright © BAKE Inc. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
