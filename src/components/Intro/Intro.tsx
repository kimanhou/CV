import React from "react";
import "./Intro.scss";
import avatar from "./avatar.png";
import computer from "./computer.png";
import { SocialBar } from "components/Social";
import WorkBlockTags from "components/Main/Work/Tags/WorkBlockTags";
import { RAKUTEN_WORK_INFO } from "components/Main/Work/utils";

export const Intro: React.FC = (props) => {
    return (
        <section id="intro" className="flex-row">
            <div id="intro-column-left" className="flex-column">
                <div id="intro-box-2" className="flex-row flex-1 intro-box">
                    TWO
                </div>
                <div className="flex-row flex-1">
                    <div
                        id="intro-box-3"
                        className="flex-1 intro-box flex-row align-items-center justify-content-center"
                    >
                        <h1>CURRENT POSITION</h1>
                        <div
                            id="intro-box-3-content"
                            className="flex-column align-items-center"
                        >
                            <img
                                src={computer}
                                alt="Illustration of a laptop"
                            />
                            <p>
                                <b>Frontend Engineer</b> at <b>Rakuten</b>
                            </p>
                            <p>
                                You know when you're on a website and suddenly
                                an ad pop up blows up in your face, like a wild
                                Pokemon ? Well, that's me.
                            </p>
                            <WorkBlockTags tags={RAKUTEN_WORK_INFO.tags} />
                        </div>
                    </div>
                    <div
                        id="intro-box-4"
                        className="flex-1 intro-box flex-column justify-content-center align-items-center"
                    >
                        <div
                            id="intro-box-4-content"
                            className="flex-column justify-content-center align-items-center"
                        >
                            <h1>WANT TO SAY 'HELLO' ?</h1>
                            <SocialBar />
                        </div>
                    </div>
                </div>
            </div>
            <div id="intro-box-1-container" className="flex-row">
                <div
                    id="intro-box-1"
                    className="flex-1 flex-column intro-box"
                    style={{
                        backgroundImage: `url(${avatar})`,
                    }}
                />
            </div>
        </section>
    );
};
