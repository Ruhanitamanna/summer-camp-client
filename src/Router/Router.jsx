import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import LogIn from "../Components/Login/LogIn";
import SignUp from "../Components/SignUp/SignUp";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AllClasses from "../Components/AllClasses/AllClasses";
import AllInstructors from "../Components/AllInstructors/AllInstructors";
import DashBoard from "../Layout/DashBoard";
import MyClasses from "../Components/DashBord/MyClasses";
import EnrolledClasses from "../Components/DashBord/EnrolledClasses";

import PaymentHistory from "../Components/DashBord/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import Allusers from "../Components/DashBord/AllUsers/Allusers";
import InstructorsPage from "../Components/DashBord/AllUsers/InstructorsPage";

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
      {
        path: "/classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/instructors",
        element: <InstructorsPage></InstructorsPage>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "enrolled",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "allUsers",
        element: <Allusers></Allusers>,
      },
      {
        path: "instructors",
        element: <InstructorsPage></InstructorsPage>,
      },
    ],
  },
]);
export default router;
