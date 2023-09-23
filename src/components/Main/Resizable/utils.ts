export const setContainerHeight = ({
    container,
    left,
    right,
    draggableLine,
}: {
    container: HTMLDivElement | null;
    left: HTMLDivElement | null;
    right: HTMLDivElement | null;
    draggableLine: HTMLDivElement | null;
}) => {
    if (left?.clientHeight !== undefined && right?.clientHeight !== undefined) {
        const maxHeight = Math.max(left.clientHeight, right.clientHeight);
        if (container !== null) {
            container.style.height = `${maxHeight}px`;
        }
        if (draggableLine !== null) {
            draggableLine.style.height = `${maxHeight}px`;
        }
    }
};

export const pauseEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    return false;
};
