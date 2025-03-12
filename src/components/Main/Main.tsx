import { FC, useState } from "react";
import SecondaryNavigation from "@/components/Main/SecondaryNavigation/SecondaryNavigation";
import { Work } from "@/components/Main/Work/Work";
import Others from "@/components/Main/Others/Others";
import DownloadButton from "@/components/Main/DownloadButton";
import Resizable from "@/components/Main/Resizable/Resizable";
import SecondaryTitle from "@/components/Main/SecondaryTitle/SecondaryTitle";
import styles from "./Main.module.scss";

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
        <section className={styles.main}>
            <div className={styles.container}>
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
