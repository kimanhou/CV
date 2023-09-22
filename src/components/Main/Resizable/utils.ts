export const setContainerHeight = ({
    container,
    left,
    right,
}: {
    container: HTMLDivElement | null;
    left: HTMLDivElement | null;
    right: HTMLDivElement | null;
}) => {
    if (
        container !== null &&
        left?.clientHeight !== undefined &&
        right?.clientHeight !== undefined
    ) {
        const maxHeight = Math.max(left.clientHeight, right.clientHeight);
        container.style.height = `${maxHeight}px`;
    }
};

export const pauseEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    return false;
};
