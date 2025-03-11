import Tag from "components/common/Tag/Tag";
import AnimatorOnScroll from "../Animator/AnimatorOnScroll";
import "./AnimatedTags.scss";

interface IAnimatedTagsProps {
    tags: string[];
    delay?: number;
}

const AnimatedTags: React.FC<IAnimatedTagsProps> = (props) => {
    const delay = props.delay ?? 0;
    return (
        <div className="flex-row" style={{ marginTop: "2rem" }}>
            {props.tags.map((tag, i) => (
                <AnimatorOnScroll
                    key={i}
                    animationClassName="animated-tags"
                    animationStyleInit={{
                        animation: `animated-tags-init 0.4s ease-in ${
                            delay + 0.1 * i
                        }s forwards`,
                    }}
                    animationStyleExit={{
                        animation: `animated-tags-exit 0.4s ease-in ${
                            delay + 0.1 * i
                        }s forwards`,
                    }}
                >
                    <Tag
                        tag={tag}
                        noMarginRight={i === props.tags.length - 1}
                    />
                </AnimatorOnScroll>
            ))}
        </div>
    );
};

export default AnimatedTags;
