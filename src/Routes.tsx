import { RouteObject } from "react-router-dom";
import Layout from "./layouts/Layout";
import { homeRoutes } from "./pages/home/Routes";
import { authRoutes } from "./pages/auth/Routes";
import { dashboardRoutes } from "./pages/dashboard/Routes";
import { reviewRoutes } from "./pages/review/Routes";
import { courseRoutes } from "./pages/course/Routes";

export const Routes = homeRoutes
    .concat(authRoutes)
    .concat(dashboardRoutes)
    .concat(reviewRoutes)
    .concat(courseRoutes);

export const RouterRoutes:RouteObject[] = [
    {
        path: "",
        element: <Layout />,
        children: Routes
    }
]