import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import ProjectsPage from "../Pages/ProjectsPage";
import ProjectDetails from "../Pages/ProjectDetails";
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
                path: '/projects/:slug',
                element: <ProjectDetails />
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    },
]);