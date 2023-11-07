import { Outlet } from "react-router-dom";

import Footer from "../shared/Footer";



const Root = () => {
    return (
        <div className="bg-base-50 min-h-screen flex flex-col">

           
                
                <Outlet></Outlet>

               
               <div className="mt-auto">
               <Footer></Footer>
               </div>
               
                

            
        </div>
    );
};

export default Root;