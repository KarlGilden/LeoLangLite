import { RouteObject } from "react-router-dom";
import StoriesPage from "./StoriesPage";

const storiesPath = "stories";

const storiesRoutes: RouteObject[] = [
    {
        path: storiesPath,
        element: <StoriesPage />
    }

];

export { storiesRoutes };