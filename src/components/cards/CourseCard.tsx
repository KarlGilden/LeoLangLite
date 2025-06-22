import { Link } from 'react-router-dom'
import Spacer from '../layout/Spacer'
import Card from './Card'

interface IProps {
    id: number
    title: string,
    description: string,
    lessonCount: number,
    grade: number,
    imgUrl: string
}

const CourseCard = ({ id, title, description, lessonCount, grade, imgUrl }: IProps) => {
  return (
    <Link to={`/learn/course/${id}`}>
        <Card imgUrl={imgUrl}>
          <h1 className='font-bold'>{title}</h1>
          <Spacer size={1} />
          <small>{description}</small>
          <Spacer size={1} />
          <div className='flex justify-between'>
              <small>{grade}</small>
              <small>{lessonCount}</small>
          </div>
      </Card>
    </Link>

  )
}

export default CourseCard