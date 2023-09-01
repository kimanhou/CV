import React from "react";

interface IEducationBlockProps {
    date: string;
    location: string;
    text: string;
}

const EducationBlock: React.FC<IEducationBlockProps> = (props) => {
    return (
        <div className="education-block">
            <div className="education-block-header">
                {props.date} &#x2022; {props.location}
            </div>
            <h2>{props.text}</h2>
        </div>
    );
};

export default EducationBlock;
