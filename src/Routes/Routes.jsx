import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AllJob from "../pages/AllJob";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import UserProfile from "../pages/UserProfile";
import PrivateRoute from "../providers/PrivateRoute";
import Blogs from "../pages/Blogs";
import AddJob from "../pages/AddJob";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/allJob",
          element: <AllJob></AllJob>
        },
        {
          path: "/login",
          element:<LogIn></LogIn>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/userProfile",
          element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },
        {
          path: "/blogs",
          element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
        },
        {
          path: "/addJob",
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;