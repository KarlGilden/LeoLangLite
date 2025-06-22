import { IconType } from "react-icons"

interface IProps {
    index: number
    currentIndex: number
    Icon: IconType
    onClick: ()=> void
}

const LessonTabButton = ({ index, currentIndex, onClick, Icon}: IProps) => {
    const color = index === currentIndex ? "text-highlight" : "hover:text-gray-dark text-gray-medium";

    return (
        <div className="cursor-pointer">
            <Icon onClick={onClick} className={`${color} text-3xl`}/>
        </div>
    )
}

export default LessonTabButton