import { RefObject, useEffect, useState } from "react";

interface IUserIntersectionProps {
    element: RefObject<HTMLElement>;
    threshold: number;
}

export const useIntersection = ({
    element,
    threshold,
}: IUserIntersectionProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!element.current) return;

        const current = element.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { root: null, threshold }
        );
        observer.observe(current);

        return () => observer.unobserve(current);
    }, [element, threshold]);

    return isVisible;
};
