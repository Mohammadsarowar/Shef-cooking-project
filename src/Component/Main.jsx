import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";



const Main = () => {
    return (
        <>
         <Header/>
  
         <div className="min-h-[calc(100vh-137px)]">
      <Outlet />
     </div>
   
         <Footer/>   
        </>
    );
};

export default Main;