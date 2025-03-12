import { FC, Fragment } from "react";
import { WorkEnum } from "@/components/Main/Work/Work";
import WorkBlockHeader from "@/components/Main/Work/WorkBlockHeader";
import AnimatedTags from "@/components/common/Tag/AnimatedTags";
import { getWorkBlockInfo } from "./utils";
import styles from "./WorkBlock.module.scss";

interface IWorkBlockProps {
    company: WorkEnum;
}

const WorkBlock: FC<IWorkBlockProps> = (props) => {
    const { date, location, isCurrentPosition, title, description, tags } =
        getWorkBlockInfo(props.company);
    return (
        <div className={`${styles.workBlock} work-block`}>
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
            <AnimatedTags tags={tags} />
            <div
                className={`${styles.workBlockBottomLine} work-block-bottom-line`}
            />
        </div>
    );
};

export default WorkBlock;
