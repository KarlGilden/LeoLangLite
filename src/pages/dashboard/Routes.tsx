import { RouteObject } from "react-router-dom";
import DashboardPage from "./Dashboard";


const dashboardPath = "/dashboard";

const dashboardRoutes: RouteObject[] = [
    {
        path: dashboardPath,
        element: <DashboardPage />
    }

];

export { dashboardRoutes };