import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Shop from "../Shop";
import ErrorPage from "../ErrorPage";
import Login from "../page/Login";
import SignUp from "../page/SingUp";
import AboutPage from "../page/About";
import Contact from "../page/Contact";
import Details from "../Details/Details";
import Blog from "../page/Blog";
import PrivateRouter from "../../Auth-Provider/PrivateRouter";

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
           path:"/shop",
           element:<Shop/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/singUp',
            element:<SignUp/>
        },
        {
            path:'/about',
            element:<AboutPage/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
          path:'/blog',
          element:<Blog/>
        },
        {
            path:'details/:id',
            element:<PrivateRouter><Details/></PrivateRouter> ,
            loader:({params})=>fetch('https://the-assignment-ten-server.vercel.app')
           
          }
      ]
    }
  ]);


  export default router;