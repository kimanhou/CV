import { FC, useEffect, useRef, useState } from "react";
import { pauseEvent, setColumnsWidth, setContainerHeight } from "./utils";
import styles from "./Resizable.module.scss";

interface IResizableProps {
    left: JSX.Element;
    right: JSX.Element;
}

const Resizable: FC<IResizableProps> = (props) => {
    const [isResizing, setIsResizing] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const draggableLineRef = useRef<HTMLDivElement>(null);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsResizing(true);
        pauseEvent(e);
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isResizing) return;
        if (!leftRef.current) return;

        const leftWidth =
            e.clientX - leftRef.current?.getBoundingClientRect().x;
        const rightWidth =
            window.innerWidth -
            e.clientX -
            leftRef.current?.getBoundingClientRect().x;
        if (rightWidth < 400 || leftWidth < 400) {
            return;
        }

        const draggableLineX =
            e.clientX - leftRef.current?.getBoundingClientRect().x;

        leftRef.current.style.width = `calc(${draggableLineX}px - 6rem - 4px)`;
        if (rightRef.current !== null) {
            rightRef.current.style.left = `calc(${draggableLineX}px + 2rem + 4px)`;
        }
        if (draggableLineRef.current) {
            draggableLineRef.current.style.left = `calc(${draggableLineX}px - 4px)`;
        }

        setContainerHeight({
            container: containerRef.current,
            left: leftRef.current,
            right: rightRef.current,
            draggableLine: draggableLineRef.current,
        });
    };

    const onMouseUp = () => {
        setIsResizing(false);
    };

    useEffect(() => {
        setContainerHeight({
            container: containerRef.current,
            left: leftRef.current,
            right: rightRef.current,
            draggableLine: draggableLineRef.current,
        });

        setColumnsWidth({
            left: leftRef.current,
            right: rightRef.current,
            draggableLine: draggableLineRef.current,
        });
    }, []);

    window.addEventListener("resize", () => {
        setContainerHeight({
            container: containerRef.current,
            left: leftRef.current,
            right: rightRef.current,
            draggableLine: draggableLineRef.current,
        });

        setColumnsWidth({
            left: leftRef.current,
            right: rightRef.current,
            draggableLine: draggableLineRef.current,
        });
    });

    return (
        <div
            className={styles.resizable}
            ref={containerRef}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
        >
            <div
                className={`${styles.resizableCol} ${styles.resizableLeft}`}
                ref={leftRef}
            >
                {props.left}
            </div>

            <div
                className={styles.resizableDrag}
                onMouseDown={onMouseDown}
                ref={draggableLineRef}
            >
                <div className={styles.resizableDragLine}></div>
            </div>

            <div
                className={`${styles.resizableCol} ${styles.resizableRight}`}
                ref={rightRef}
            >
                {props.right}
            </div>
        </div>
    );
};

export default Resizable;
