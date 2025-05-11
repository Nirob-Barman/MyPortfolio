import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import ProjectsPage from "../Home/Home/ProjectsPage";
import Blogs from "../Pages/Blogs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/projects',
                element: <ProjectsPage />
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    },
]);