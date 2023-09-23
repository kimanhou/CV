import React, { useEffect, useRef, useState } from "react";
import "./Resizable.scss";
import { pauseEvent, setContainerHeight } from "./utils";

interface IResizableProps {
    left: JSX.Element;
    right: JSX.Element;
}

const Resizable: React.FC<IResizableProps> = (props) => {
    const [isResizing, setIsResizing] = useState<boolean>(false);
    // const [lastDownX, setLastDownX] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const dragableLineRef = useRef<HTMLDivElement>(null);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsResizing(true);
        // setLastDownX(e.clientX);
        pauseEvent(e);
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isResizing) return;

        if (e.clientX < 335) {
            return;
        }

        const offsetLeft = e.clientX;
        if (rightRef.current !== null) {
            rightRef.current.style.left = `${offsetLeft}px`;
        }
        if (leftRef.current) {
            leftRef.current.style.width = `${offsetLeft}px`;
        }

        setContainerHeight({
            container: containerRef.current,
            left: leftRef.current,
            right: rightRef.current,
            dragableLine: dragableLineRef.current,
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
            dragableLine: dragableLineRef.current,
        });
    }, []);

    return (
        <div
            className="resizable flex-row"
            ref={containerRef}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
        >
            <div className="resizable-col resizable-left" ref={leftRef}>
                {props.left}
            </div>

            <div
                className="resizable-drag"
                onMouseDown={onMouseDown}
                ref={dragableLineRef}
            >
                <div className="resizable-drag-line"></div>
            </div>

            <div className="resizable-col resizable-right" ref={rightRef}>
                {props.right}
            </div>
        </div>
    );
};

export default Resizable;
