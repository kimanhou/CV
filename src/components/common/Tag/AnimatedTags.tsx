import { FC } from "react";
import Tag from "@/components/common/Tag/Tag";
import AnimatorOnScroll from "@/components/common/Animator/AnimatorOnScroll";
import styles from "./AnimatedTags.module.scss";

interface IAnimatedTagsProps {
    tags: string[];
    delay?: number;
}

const AnimatedTags: FC<IAnimatedTagsProps> = (props) => {
    const delay = props.delay ?? 0;
    return (
        <div className={styles.animatedTags} style={{ marginTop: "2rem" }}>
            {props.tags.map((tag, i) => (
                <AnimatorOnScroll
                    key={i}
                    animationClassName={styles.animatedTagsClassName}
                    animationStyleInit={{
                        animation: `${styles.animatedTagsInit} 0.4s ease-in ${
                            delay + 0.1 * i
                        }s forwards`,
                    }}
                    animationStyleExit={{
                        animation: `${styles.animatedTagsExit} 0.4s ease-in ${
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
