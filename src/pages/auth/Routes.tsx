import { RouteObject } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";


const registerPath = "/register";
const loginPath = "/login";

const authRoutes: RouteObject[] = [
    {
        path: registerPath,
        element: <RegisterPage />
    },
    {
        path: loginPath,
        element: <LoginPage />
    },

];

export { authRoutes };