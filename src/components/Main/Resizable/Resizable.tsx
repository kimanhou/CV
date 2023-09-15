import React, { useRef, useState } from "react";
import "./Resizable.scss";

interface IResizableProps {
    left: JSX.Element;
    right: JSX.Element;
}

const Resizable: React.FC<IResizableProps> = (props) => {
    const [isResizing, setIsResizing] = useState<boolean>(false);
    // const [lastDownX, setLastDownX] = useState<number>(0);
    const containerRef = useRef(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsResizing(true);
        // setLastDownX(e.clientX);
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
    };

    const onMouseUp = () => {
        setIsResizing(false);
    };

    return (
        <div
            className="resizable flex-row"
            ref={containerRef}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
        >
            <div className="resizable-left" ref={leftRef}>
                {props.left}
            </div>

            <div className="resizable-drag" onMouseDown={onMouseDown}>
                <div className="resizable-drag-line"></div>
            </div>

            <div className="resizable-right" ref={rightRef}>
                {props.right}
            </div>
        </div>
    );
};

export default Resizable;
