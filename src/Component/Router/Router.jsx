import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Shop from "../Shop";
import ErrorPage from "../ErrorPage";
import { Root } from "postcss";
import Login from "../page/Login";
import SignUp from "../page/SingUp";
import AboutPage from "../page/About";
import Contact from "../page/Contact";
import Details from "../Details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Shop/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'singUp',
            element:<SignUp/>
        },
        {
            path:'about',
            element:<AboutPage/>
        },
        {
            path:'contact',
            element:<Contact/>
        },
        {
            path:'details/:id',
            element:<Details/>,
            loader:({params})=>fetch('https://the-assignment-ten-server.vercel.app')
           
          }
      ]
    }
  ]);


  export default router;