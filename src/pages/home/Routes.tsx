import { RouteObject } from "react-router-dom";
import HomePage from "./HomePage";

const homePath = "";

const homeRoutes: RouteObject[] = [
    {
        path: homePath,
        element: <HomePage />
    }
];

export {homePath, homeRoutes};