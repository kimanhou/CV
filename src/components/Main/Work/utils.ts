import { WorkEnum } from "./Work";

export const RAKUTEN_WORK_INFO = {
    date: "October 2022",
    location: "Tokyo, Japan",
    isCurrentPosition: true,
    title: "Frontend engineer at Rakuten Group Inc.",
    description: [
        "Designing and implementing web features on an in-house marketing tool, working on both the JavaScript SDK and Frontend teams",
        "Identifying and resolving user experience issues",
        "Improving the team’s processes and CI/CD pipeline",
        "Mentoring junior members",
    ],
    tags: ["React", "TypeScript", "Vue.js", "JavaScript"],
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
