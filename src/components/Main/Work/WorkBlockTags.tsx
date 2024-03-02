import AnimatedTags from "components/common/Tag/AnimatedTags";

interface IWorkBlockTagsProps {
    tags: string[];
}

const WorkBlockTags: React.FC<IWorkBlockTagsProps> = (props) => {
    return (
        <div className="work-block-tags flex-row" style={{ marginTop: "2rem" }}>
            <AnimatedTags tags={props.tags} />
        </div>
    );
};

export default WorkBlockTags;
