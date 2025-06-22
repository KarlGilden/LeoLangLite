import { Outlet, RouteObject } from "react-router-dom";
import LibraryPage from "./LibraryPage";
import { storiesRoutes } from "./stories/Routes";
import { grammarGuidesRoutes } from "./grammarGuides/Routes";

const libraryPath = "library";
const defaultRoute:RouteObject[] = [{
    path: "",
    element: <LibraryPage />
}]

const childPaths = defaultRoute.concat(storiesRoutes).concat(grammarGuidesRoutes);
const libraryRoutes: RouteObject[] = [
    {
        path: libraryPath,
        element: <Outlet />,
        children: childPaths
    }

];

export { libraryRoutes };