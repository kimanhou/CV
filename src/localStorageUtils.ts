import { ISlackReaction } from "@/components/common/SlackReaction/SlackReactionContainer";

const LOCAL_STORAGE_APP_NAME = "kanguyen";

const SLACK_REACTIONS_KEY = `${LOCAL_STORAGE_APP_NAME}SlackReactions`;
const THEME_KEY = `${LOCAL_STORAGE_APP_NAME}Theme`;

export const setSlackReactions = (slackReactions: Array<ISlackReaction>) => {
    localStorage.setItem(SLACK_REACTIONS_KEY, JSON.stringify(slackReactions));
};

export const getSlackReactions = () => {
    return localStorage.getItem(SLACK_REACTIONS_KEY);
};

export const setTheme = (theme: string) => {
    localStorage.setItem(THEME_KEY, theme);
};

export const getTheme = () => {
    return localStorage.getItem(THEME_KEY);
};
