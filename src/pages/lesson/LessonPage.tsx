import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router"
import { getLessonData } from "../../data/services/lessonService";
import { FaBookOpen } from "react-icons/fa6";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { RiQuestionAnswerFill } from "react-icons/ri";
import Spacer from "../../components/layout/Spacer";
import LessonTabButton from "../../components/lesson/LessonTabButton";

const LessonPage = () => {
    const { id } = useParams();

    if(!id) return <Navigate to="/learn/dashboard" />

    const [lessonData, setLessonData] = useState<any>(null);
    const [lessonType, setLessonType] = useState<number>(0);

    useEffect(()=> {
        getLesson()
    }, []);

    const getLesson = async () => {
        const data = await getLessonData(id);
        console.log(data);
        setLessonData(data[0]);
    };

  return (
    <div className="flex">
        <div className="p-5">
            <LessonTabButton index={0} currentIndex={lessonType} Icon={FaBookOpen} onClick={()=>setLessonType(0)} />
            <Spacer size={2} />
            <LessonTabButton index={1} currentIndex={lessonType} Icon={FaFileCircleQuestion} onClick={()=>setLessonType(1)} />
            <Spacer size={2} />
            <LessonTabButton index={2} currentIndex={lessonType} Icon={RiQuestionAnswerFill} onClick={()=>setLessonType(2)} />
        </div>
        <div>
            {lessonType === 0 && (
                <div className="p-5">
                    <h1 className="font-bold text-xl">{lessonData?.story.title}</h1>
                    <Spacer size={1} />
                    <p>{lessonData?.story.text}</p>
                </div>
            )}

            {lessonType === 1 && (
                <div className="p-5">
                    <h1 className="font-bold text-xl">{lessonData?.grammar_guide.title}</h1>
                    <Spacer size={1} />
                    <p>{lessonData?.grammar_guide.text}</p>
                </div>
            )}

            {lessonType === 2 && (
                <div className="p-5">
                    <h1 className="font-bold text-xl">{lessonData?.dialogue.title}</h1>
                    <Spacer size={1} />
                    <p>{lessonData?.dialogue.text}</p>
                </div>
            )}
        </div>

    </div>
  )
}

export default LessonPage