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


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
              path:'/',
              element:<Hdchef></Hdchef>,
              loader:()=>fetch(`http://localhost:5000/chef`)
        },
     
          ]},
          {
            path: '/recipes', 
            element: <ChefLayout></ChefLayout>,
            children: [
                {
                    path: ':id',
                    element: <Recipes></Recipes>,
                    loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
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
    },
    {
      path:'/',
      element:<Error></Error>
    }
  ]);
  export default router;