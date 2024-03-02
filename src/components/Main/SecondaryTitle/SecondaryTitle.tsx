import "./SecondaryTitle.scss";

interface ISecondaryTitleProps {
    title: string;
}

const SecondaryTitle: React.FC<ISecondaryTitleProps> = (props) => {
    return (
        <div className="secondary-title">
            <h3>{props.title}</h3>
            <div className="secondary-title-bottom-line flex-row">
                <div className="secondary-title-bottom-line-black"></div>
                <div className="secondary-title-bottom-line-grey"></div>
            </div>
        </div>
    );
};

export default SecondaryTitle;
