import { FC, useState } from "react";
import Others from "./Others/Others";
import SecondaryNavigation from "./SecondaryNavigation/SecondaryNavigation";
import { Work } from "./Work/Work";
import "./Main.scss";
import DownloadButton from "./DownloadButton";
import Resizable from "./Resizable/Resizable";
import SecondaryTitle from "./SecondaryTitle/SecondaryTitle";

export enum MainTabEnum {
    WORK = "Work",
    OTHERS = "Education & others",
}

export const RESIZABLE_THRESHOLD = 800;

interface IMainProps {
    activeTab: MainTabEnum;
    setActiveTab: (activeTab: MainTabEnum) => void;
}

const Main: FC<IMainProps> = (props) => {
    const [isResizable, setIsResizable] = useState<boolean>(
        window.innerWidth > RESIZABLE_THRESHOLD
    );

    window.addEventListener("resize", () =>
        setIsResizable(window.innerWidth > RESIZABLE_THRESHOLD)
    );

    return (
        <section id="main">
            <div className="c-container c-container--top">
                {!isResizable && (
                    <>
                        <SecondaryNavigation
                            activeTab={props.activeTab}
                            setActiveTab={props.setActiveTab}
                        />
                        {props.activeTab.toLocaleLowerCase() === "work" && (
                            <Work />
                        )}
                        {props.activeTab.toLocaleLowerCase() !== "work" && (
                            <Others />
                        )}
                        <a href="./CV.pdf" download="KimAnhNguyen - CV">
                            <DownloadButton />
                        </a>
                    </>
                )}

                {isResizable && (
                    <>
                        <Resizable
                            left={
                                <>
                                    <SecondaryTitle title={MainTabEnum.WORK} />
                                    <Work />
                                </>
                            }
                            right={
                                <>
                                    <SecondaryTitle title="Education" />
                                    <Others />
                                </>
                            }
                        />
                        <a
                            href="./CV.pdf"
                            download="KimAnhNguyen - CV"
                            id="main-download-button"
                        >
                            <DownloadButton />
                        </a>
                    </>
                )}
            </div>
        </section>
    );
};

export default Main;
