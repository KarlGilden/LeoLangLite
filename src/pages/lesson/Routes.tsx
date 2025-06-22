import { RouteObject } from "react-router-dom";
import LessonPage from "./LessonPage";

const lessonPath = "lesson/:id";

const lessonRoutes: RouteObject[] = [
    {
        path: lessonPath,
        element: <LessonPage />
    }
];

export { lessonRoutes };