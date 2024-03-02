import { Fragment } from "react";
import { WorkEnum } from "./Work";
import WorkBlockHeader from "./WorkBlockHeader";
import WorkBlockTags from "./WorkBlockTags";
import { getWorkBlockInfo } from "./utils";

interface IWorkBlockProps {
    company: WorkEnum;
}

const WorkBlock: React.FC<IWorkBlockProps> = (props) => {
    const { date, location, isCurrentPosition, title, description, tags } =
        getWorkBlockInfo(props.company);
    return (
        <div className="work-block">
            <WorkBlockHeader
                date={date}
                location={location}
                isCurrentPosition={isCurrentPosition}
            />
            <h2>{title}</h2>
            <p>
                {description.map((line, i) => (
                    <Fragment key={i}>
                        {line}
                        <br></br>
                    </Fragment>
                ))}
            </p>
            <WorkBlockTags tags={tags} />
            <div className="work-block-bottom-line" />
        </div>
    );
};

export default WorkBlock;
