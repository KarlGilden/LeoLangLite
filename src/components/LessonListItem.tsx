import { Link } from "react-router-dom"

interface IProps {
    id: number
    title: string
}

const LessonListItem = ({ title, id }: IProps) => {
  return (
    <Link className="block border-solid" to={`/learn/lesson/${id}`}>
        <div className="py-5 px-2 hover:bg-gray transition-all duration-300">
            {title}
        </div>
    </Link>
  )
}

export default LessonListItem