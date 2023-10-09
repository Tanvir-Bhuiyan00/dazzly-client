import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllJewelry from "../Pages/AllJewelry/AllJewelry";
import MyJewelry from "../Pages/MyJewelry/MyJewelry";
import AddJewelry from "../Pages/AddJewelry/AddJewelry";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ClientHome from "../Pages/Dashboard/Client/ClientHome/ClientHome";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import OwnerHome from "../Pages/Dashboard/Owner/OwnerHome/OwnerHome";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "alljewelry",
        element: <AllJewelry></AllJewelry>,
      },
      {
        path: "myjewelry",
        element: (
          <PrivateRoute>
            <MyJewelry></MyJewelry>
          </PrivateRoute>
        ),
      },
      {
        path: "addjewelry",
        element: (
          <PrivateRoute>
            <AddJewelry></AddJewelry>
          </PrivateRoute>
        ),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "clienthome",
        element: <ClientHome></ClientHome>,
      },
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "ownerhome",
        element: <OwnerHome></OwnerHome>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
