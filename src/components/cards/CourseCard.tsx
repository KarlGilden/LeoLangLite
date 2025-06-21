import Spacer from '../layout/Spacer'
import Card from './Card'

interface IProps {
    title: string,
    description: string,
    lessonCount: number,
    grade: number,
    imgUrl: string
}

const CourseCard = ({ title, description, lessonCount, grade, imgUrl }: IProps) => {
  return (
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
  )
}

export default CourseCard