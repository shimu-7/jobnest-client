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
import JobDetails from "../pages/JobDetails";
import AppliedJobs from "../pages/AppliedJobs";
import MyJobs from "../pages/MyJobs";
import UpdateJob from "../pages/UpdateJob";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader : ()=>fetch('http://localhost:5000/jobs')
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
        },
        {
          path: "/jobDetails/:id",
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: "/appliedJob",
          element:<PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
          loader: ()=>fetch('http://localhost:5000/applied')
        },
        {
          path: "/myJob",
          element:<PrivateRoute><MyJobs></MyJobs></PrivateRoute>,
          loader: ()=>fetch('http://localhost:5000/jobs')
        },
        {
          path: "/updateJob/:id",
          element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        }
      ]
    },
  ]);

  export default router;