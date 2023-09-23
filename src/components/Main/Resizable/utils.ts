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

export const setColumnsWidth = ({
    left,
    right,
    draggableLine,
}: {
    left: HTMLDivElement | null;
    right: HTMLDivElement | null;
    draggableLine: HTMLDivElement | null;
}) => {
    if (left == null) return;

    const marginApp = left.getBoundingClientRect().x;

    let draggableLineX =
        ((window.innerWidth -
            2 * marginApp - // margin auto
            8 - // width of resizable-drag
            105 - // margin between left and resizable-drag
            35) * // margin between right and resizable-drag
            71.85) /
        100;

    const rightWidth = window.innerWidth - draggableLineX - marginApp;

    if (rightWidth < 400) {
        draggableLineX = window.innerWidth - marginApp - 400 - 35 - 4;
    }

    if (right !== null) {
        right.style.left = `calc(${draggableLineX}px + 35px + 4px`;
    }
    if (draggableLine !== null) {
        draggableLine.style.left = `calc(${draggableLineX}px - 4px`;
    }
    left.style.width = `calc(${draggableLineX}px - 105px - 4px)`;
};

export const pauseEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    return false;
};
