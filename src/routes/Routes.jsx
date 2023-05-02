import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../Layouts/Main';
import LoginLayOut from '../Layouts/LoginLayOUt';
import Login from "../pages/LogIn";
import Register from "../pages/Register";
import Blog from "../pages/Blog";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {

        }
      ]
    },
    {
      path:"/",
      element:<LoginLayOut></LoginLayOut>,
      children:[{
        path:'/login',
        element:<Login></Login>
      },{
    path:'/register',
    element:<Register></Register>
      }
    ]

    },
    {
      path:'/blog',
      element:<Blog></Blog>
    }
  ]);
  export default router;