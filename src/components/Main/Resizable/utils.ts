export const setContainerHeight = ({
    container,
    left,
    right,
    dragableLine,
}: {
    container: HTMLDivElement | null;
    left: HTMLDivElement | null;
    right: HTMLDivElement | null;
    dragableLine: HTMLDivElement | null;
}) => {
    if (left?.clientHeight !== undefined && right?.clientHeight !== undefined) {
        const maxHeight = Math.max(left.clientHeight, right.clientHeight);
        if (container !== null) {
            container.style.height = `${maxHeight}px`;
        }
        if (dragableLine !== null) {
            dragableLine.style.height = `${maxHeight}px`;
        }
    }
};

export const pauseEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    return false;
};
