import { RouteObject } from "react-router-dom";
import ReviewPage from "./ReviewPage";


const reviewPage = "/review";

const reviewRoutes: RouteObject[] = [
    {
        path: reviewPage,
        element: <ReviewPage />
    }

];

export { reviewRoutes };