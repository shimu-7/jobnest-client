

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
            
                    <img className="text-5xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxe6nQDQTbrY_P_gJDZHy3YW__RljBqd-u1HGh8lYDuHSSZeY77IzR7Gr6J2oM2NC0LQ&usqp=CAU" alt="" />
                    

                    <button className="btn btn-active btn-accent p-2 rounded-lg my-5"><Link to="/">Go Back</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;