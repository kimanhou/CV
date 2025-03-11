import { FC } from "react";

interface IWorkBlockHeaderProps {
    date: string;
    location: string;
    isCurrentPosition: boolean;
}

const WorkBlockHeader: FC<IWorkBlockHeaderProps> = (props) => {
    return (
        <div className="work-block-header font-size-s">
            From <b>{props.date}</b>
            <span className="work-block-header-location">
                &#x2022; {props.location}
            </span>
            {props.isCurrentPosition && (
                <span className="work-block-header-current-position">
                    ⭐ Current position
                </span>
            )}
        </div>
    );
};

export default WorkBlockHeader;
