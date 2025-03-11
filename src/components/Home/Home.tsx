import { FC } from "react";
import Intro from "@/components/Intro/Intro";
import Divider from "@/components/Divider/Divider";
import Main, { MainTabEnum } from "@/components/Main/Main";

interface IHomeProps {
    activeTab: MainTabEnum;
    setActiveTab: (activeTab: MainTabEnum) => void;
}

const Home: FC<IHomeProps> = (props) => {
    return (
        <section id="home">
            <Intro />
            <Divider />
            <Main
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
        </section>
    );
};

export default Home;
