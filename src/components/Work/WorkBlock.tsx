import React from "react";
import { WorkEnum } from "./Work";
import "./WorkBlock.scss";

interface IWorkBlockProps {
    company: WorkEnum;
}

const WorkBlock: React.FC<IWorkBlockProps> = (props) => {
    return (
        <div className="work-block">
            <div className="work-block-wrapper">
                <div className="work-block-text flex-column">
                    <h1>{props.company}</h1>
                </div>
                <div className="work-block-image">Image</div>
            </div>
        </div>
    );
};

export default WorkBlock;
