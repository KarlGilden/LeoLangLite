import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom"
import { getCourseLessons } from "../../data/services/coursesService";
import Spacer from "../../components/layout/Spacer";
import LessonListItem from "../../components/LessonListItem";

const CoursePage = () => {
  const { id } = useParams();
  
  if(!id) return <Navigate to="/learn/dashboard" />

  const [courseData, setCourseData] = useState<any>(null);

  useEffect(()=>{
    getCourseData()
  }, []);

  const getCourseData = async () => {
    if(!id) return;

    const data = await getCourseLessons(id);
    console.log(data[0])
    setCourseData(data[0]);
  }

  return (
    <div className="p-10">
      <h1 className="font-bold text-2xl">{courseData?.title}</h1>
      <p>{courseData?.description}</p>
      <Spacer size={1} />
      <ul className="divide-y">
        {courseData?.lessons.map((lesson: any, index: number)=>{
          return <LessonListItem key={index} id={lesson.id} title={lesson.title} />
        })}
      </ul>
    </div>
  )
}

export default CoursePage