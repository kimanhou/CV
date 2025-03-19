import { WorkEnum } from "./Work";

export const RAKUTEN_WORK_INFO = {
    date: "October 2022 to September 2024",
    location: "Tokyo, Japan",
    isCurrentPosition: false,
    title: "Frontend engineer at Rakuten Group Inc.",
    description: [
        "Designed and implemented web features on an in-house marketing tool, working on both the JavaScript SDK and Frontend teams",
        "Initiated architectural changes: gradual use of React instead of Vue, migration from create-react-app to Vite, creation of a common component library",
        "Improved test coverage, with the help of Storybook and snapshot testing",
        "Improved and standardized the team’s processes and CI/CD pipeline",
        "Identified and resolved user experience issues",
        "Mentored junior members",
    ],
    tags: [
        "React",
        "TypeScript",
        "Vue.js",
        "JavaScript",
        "Jenkins",
        "Storybook",
    ],
};

export const WORLD_TRIP_INFO = {
    date: "September 2019 to October 2022",
    location: "World",
    isCurrentPosition: false,
    title: "Frontend engineer freelancer",
    description: [
        "Designed and built custom websites to help local businesses, while travelling the world and living on a one month – one city basis",
    ],
    tags: ["React", "TypeScript"],
};

export const SOCGEN_WORK_INFO = {
    date: "October 2015 to July 2019",
    location: "London, UK",
    isCurrentPosition: false,
    title: "Fullstack engineer at Société Générale",
    description: [
        "Designed and implemented custom features on an in-house live trade blotter and order book for Commodities market traders in a fast-paced Agile environment",
        "Live production support and reactive hotfix release",
    ],
    tags: ["C#", ".NET", "Silverlight", "SQL Server", "Sybase"],
};

export const getWorkBlockInfo = (company: WorkEnum) => {
    switch (company) {
        case WorkEnum.RAKUTEN:
            return RAKUTEN_WORK_INFO;
        case WorkEnum.WORLD_TRIP:
            return WORLD_TRIP_INFO;
        case WorkEnum.SOCGEN:
            return SOCGEN_WORK_INFO;
    }
};
