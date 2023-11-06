import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="bg-base-50">
                
                <div >
                    
                    <Outlet></Outlet>
                    
                </div>
            </div>
    );
};

export default Root;