import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import ManageLayout from "@/layouts/ManageLayout";
import QuestionLayout from "@/layouts/QuestionLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Edit from "@/pages/Question/Edit";
import Statistics from "@/pages/Question/Statistics";
import List from "@/pages/Manage/List/List";
import Star from "@/pages/Manage/Star/Star";
import Trash from "@/pages/Manage/Trash/Trash";
import NotFound from "@/pages/404/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "manage",
        element: <ManageLayout />,
        children: [
          {
            path: "list",
            element: <List />,
          },
          {
            path: "star",
            element: <Star />,
          },
          {
            path: "trash",
            element: <Trash />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "question",
    element: <QuestionLayout />,
    children: [
      {
        path: "edit/:id",
        element: <Edit />,
      },
      {
        path: "statistics/:id",
        element: <Statistics />,
      },
    ],
  },
]);

export default router;
