import React from "react";
import "./IntroBox3.scss";
import computer from "./computer.png";
import Tag from "components/Main/Work/Tags/Tag";
import { RAKUTEN_WORK_INFO } from "components/Main/Work/utils";
import { Animator } from "components/common/Animator/Animator";

export const IntroBox3: React.FC = (props) => {
    return (
        <div
            id="intro-box-3"
            className="flex-1 intro-box flex-row align-items-center justify-content-center"
        >
            <div id="intro-box-3-h1-wrapper">
                <Animator animationClassName="intro-box-3-h1">
                    <h1>CURRENT POSITION</h1>
                </Animator>
            </div>
            <div
                id="intro-box-3-content"
                className="flex-column align-items-center"
            >
                <Animator animationClassName="intro-box-3-content">
                    <img src={computer} alt="Illustration of a laptop" />
                    <p>
                        <b>Frontend Engineer</b> at <b>Rakuten</b>
                    </p>
                    <p>
                        You know when you're on a website and suddenly an ad pop
                        up blows up in your face, like a wild Pokemon ? Well,
                        that's me.
                    </p>
                </Animator>
                <div className="flex-row" style={{ marginTop: "2rem" }}>
                    {RAKUTEN_WORK_INFO.tags.map((tag, i) => (
                        <Animator
                            animationClassName="intro-box-3-tag"
                            animationStyle={{
                                animation: `intro-box-3-content-init 0.4s ease-in ${
                                    0.8 + 0.1 * i
                                }s forwards`,
                            }}
                        >
                            <Tag tag={tag} key={i} />
                        </Animator>
                    ))}
                </div>
            </div>
        </div>
    );
};
