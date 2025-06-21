import { RouteObject } from "react-router-dom";
import { homeRoutes } from "./pages/home/Routes";
import { authRoutes } from "./pages/auth/Routes";
import { dashboardRoutes } from "./pages/dashboard/Routes";
import { reviewRoutes } from "./pages/review/Routes";
import { courseRoutes } from "./pages/course/Routes";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/layout/AuthPage";
import Page from "./pages/layout/Page";

export const publicRoutes = homeRoutes
    .concat(authRoutes)

export const privateRoutes = dashboardRoutes
    .concat(reviewRoutes)
    .concat(courseRoutes);


export const RouterRoutes:RouteObject[] = [
    {
        path: "",
        element: <Page />,
        errorElement: <NotFoundPage />,
        children: publicRoutes
    },
    {
        path: "/learn",
        element: <AuthPage />,
        errorElement: <NotFoundPage />,
        children: privateRoutes
    }
]