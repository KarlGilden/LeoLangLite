import { useEffect, useState } from 'react'
import { getDashboardCourses } from '../../data/services/coursesService';
import CourseCard from '../cards/CourseCard';
import Spacer from '../layout/Spacer';

const CourseList = () => {
    const [courses, setCourses] = useState<any>([]);

    useEffect(()=>{
        getCourses();
    }, []);

    const getCourses = async () => {
        const courses = await getDashboardCourses();

        setCourses(courses);
    };

    const output = courses ? <div className='flex flex-wrap max-w-[900px] gap-5'>
        {courses.map((course:any)=>{
            return (
                <>
                <CourseCard 
                    id={course.id}
                    title={course.title} 
                    description={course.description}
                    lessonCount={course.lessons[0].count}
                    grade={course.grade}
                    imgUrl=""
                />
            </>
            )
        })}
    </div>
    :

    "Loading...";

  return (output)
}

export default CourseList