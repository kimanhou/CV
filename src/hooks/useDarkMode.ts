import { useMediaQuery } from "@/hooks/useIsMobile";

export const useDarkMode = () => {
  return useMediaQuery("(prefers-color-scheme: dark)");
};
