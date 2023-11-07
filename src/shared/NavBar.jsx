import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const links = <>
        <li className="mx-2"><NavLink
            to="/"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}
        >
            Home
        </NavLink>
        </li>
        <li className="mx-2"><NavLink
            to="/allJob"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}
        >
            All Jobs
        </NavLink>
        </li>
        {/* {
            user && <li className="mx-2"><NavLink
                to="/addJob"
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
                Add a Job
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
            user && <li className="mx-2"><NavLink
                to="/myJob"
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
                My Job
            </NavLink>
            </li>
        } */}

    </>
    return (
        <div >
            <div className="navbar py-4 bg-base-100 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl text-blue-600">
                        JobNest
                    </a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex mx-2 ">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="hidden md:flex mr-[3px] ">
                        {
                            user?.displayName ? <p className="font-medium">{user.displayName}</p> : " "
                        }
                    </div>
                    
                        <div className="w-10 rounded-full mx-[4px]">
                            {
                                user?.photoURL ? <Link to="/userProfile">
                                    <img className="h-10 w-10 rounded-full" src={`${user.photoURL}`} referrerPolicy="no-referrer" ></img>
                                </Link> : <CgProfile className="text-3xl"></CgProfile>
                            }
                        </div>
                    {
                        user ?
                            <Link to="/"><button onClick={logOut} className="underline">Sign Out</button></Link>
                            :
                            <Link to="/login">
                                <button className="underline">Sign in</button>
                            </Link>
                    }
                </div>
            </div>
        </div>

    );
};

export default NavBar;