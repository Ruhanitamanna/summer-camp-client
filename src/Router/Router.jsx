import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import LogIn from "../Components/Login/LogIn";
import SignUp from "../Components/SignUp/SignUp";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
export default router;
