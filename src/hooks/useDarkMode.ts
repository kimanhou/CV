import { useMediaQuery } from "@/hooks/useIsMobile";
import { getTheme, setTheme } from "@/localStorageUtils";

const useDarkMode = () => {
    const saved = getTheme();
    const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

    if (!saved) {
        return prefersDark;
    }

    return saved === "dark";
};

export default useDarkMode;
