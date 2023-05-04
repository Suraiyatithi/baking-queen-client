import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../Layouts/Main';
import LoginLayOut from '../Layouts/LoginLayOUt';
import Login from "../pages/LogIn";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import Hdchef from "../Home/Hdchef";
import Recipes from "../pages/Recipes";
import ChefLayout from "../Layouts/ChefLayout";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
              path:'/',
              element:<Hdchef></Hdchef>,
              loader:()=>fetch(`https://baking-queen-server-suraiyatithi.vercel.app/chef`)
        },
     
          ]},
          {
            path: '/recipes', 
            element: <ChefLayout></ChefLayout>,
            children: [
                {
                    path: ':id',
                    element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                    loader: ({params}) => fetch(`https://baking-queen-server-suraiyatithi.vercel.app/chef/${params.id}`)
                }]},
      

       
    
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