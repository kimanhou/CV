import React from "react";

interface IEducationBlockProps {
    date: string;
    location: string;
    text: string;
}

const EducationBlock: React.FC<IEducationBlockProps> = (props) => {
    return (
        <div className="education-block">
            <div className="education-block-header font-size-s">
                {props.date} &#x2022; {props.location}
            </div>
            <h3>{props.text}</h3>
        </div>
    );
};

export default EducationBlock;
