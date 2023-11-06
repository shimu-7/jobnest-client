import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";



const Root = () => {
    return (
        <div className="bg-base-50 min-h-screen flex flex-col">

           
                <div className="mb-auto w-full">
                <NavBar></NavBar>
                </div>
                <Outlet></Outlet>

               
               <div className="mt-auto">
               <Footer></Footer>
               </div>
               
                

            
        </div>
    );
};

export default Root;