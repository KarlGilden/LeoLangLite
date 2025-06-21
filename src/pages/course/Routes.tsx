import { RouteObject } from "react-router-dom";
import CoursePage from "./CoursePage";

const coursePath = "course/:id";

const courseRoutes: RouteObject[] = [
    {
        path: coursePath,
        element: <CoursePage />
    }

];

export { courseRoutes };