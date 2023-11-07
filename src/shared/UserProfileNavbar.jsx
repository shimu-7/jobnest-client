import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const UserProfileNavbar = () => {
    const { user } = useContext(AuthContext)
    const links = <>
        {
            user && <li className="mx-2"><NavLink
                to="/userProfile"
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
                User Profile
            </NavLink>
            </li>
        }
        {
            user && <li className="mx-2 hidden md:flex"><NavLink
                to="/blogs"
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
               Blogs
            </NavLink>
            </li>
        }
        {
            user && <li className="mx-2"><NavLink
                to="/appliedJob"
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
                Applied Jobs
            </NavLink>
            </li>
        }
        {
         <li className="mx-2"><NavLink
                to="/myJob"
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
                My Jobs
            </NavLink>
            </li>
        }
    </>
    return (
        <div className="mx-auto max-w-7xl w-full">
            
            <div className="h-[1px] mx-auto bg-gray-400"></div>

            <div className="navbar">
                <div className=" w-1/2 navbar-start flex">
                    <ul className="flex mx-2 ">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className=" w-1/2 navbar-end">
                    <Link to='/addJob'>
                    <button className="btn btn-outline ">Post a Job</button>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default UserProfileNavbar;