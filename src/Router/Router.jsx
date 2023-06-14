import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import LogIn from "../Components/Login/LogIn";
import SignUp from "../Components/SignUp/SignUp";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AllClasses from "../Components/AllClasses/AllClasses";
import DashBoard from "../Layout/DashBoard";
import MyClasses from "../Components/DashBord/MyClasses";
import EnrolledClasses from "../Components/DashBord/EnrolledClasses";
import PaymentHistory from "../Components/DashBord/PaymentHistory";
import Allusers from "../Components/DashBord/AllUsers/Allusers";
import InstructorsPage from "../Components/DashBord/AllUsers/InstructorsPage";
import Payment from "../Components/DashBord/Payment";
import AdminRoute from "./AdminRoute";
import AllInstructors from "../Components/AllInstructors/AllInstructors";

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
        element: <AllInstructors></AllInstructors>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
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
        element: (
          <AdminRoute>
            <Allusers></Allusers>
          </AdminRoute>
        ),
      },
      {
        path: "instructors",
        element: <InstructorsPage></InstructorsPage>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);
export default router;
