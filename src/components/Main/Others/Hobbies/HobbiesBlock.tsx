interface IHobbiesBlockProps {
    iconSrc: string;
    text: string;
}

const HobbiesBlock: React.FC<IHobbiesBlockProps> = (props) => {
    return (
        <div className="hobbies-block flex-row">
            <img src={props.iconSrc} alt={`Hobby ${props.text} icon`} />
            <span>{props.text}</span>
        </div>
    );
};

export default HobbiesBlock;
