import { motion, useScroll } from "framer-motion"
import NavBar from "../shared/NavBar";
import UserProfileNavbar from "../shared/UserProfileNavbar";
import './Blogs.css'
const Blogs = () => {
    const { scrollYProgress } = useScroll();
    console.log(scrollYProgress);

    return (
        <>
            
            <NavBar></NavBar>
            <UserProfileNavbar></UserProfileNavbar>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress}} />  
            <div className="max-w-7xl mx-auto border">

                <div className="py-3 px-5">
                    <div>
                        <div className=" rounded-lg text-2xl font-medium">
                            What is an access token and refresh token? How do they work and where should we
                            store them on the client-side?

                        </div>
                        <div className="">
                            <p className="my-2"> <span className="font-semibold">Access Token: </span>A token is used to make security decisions and to store tamper-proof information about some system entity.</p>
                            <p className="my-2">
                                <span className="font-semibold">Refresh token: </span> The refresh token is used to generate a new access token. Typically, if the access token has an expiration date, once it expires, the user would have to authenticate again to obtain an access token.
                            </p>
                            <p className="my-2">
                                <span className="font-semibold">Working Procedure: </span>Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. And refresh token just helps to re-validate a user without them having to re-enter their login credentials multiple times. If refresh token expire, then user have to re-enter with their login credentials.
                            </p>
                            <p className="my-2">
                                <span className="font-semibold">Where to Store: </span>When the server sends a token to the client, the client can store it in local storage or in a browser cookie. Storing tokens in local storage is not recommended for security reasons. Storing tokens in browser cookies is safer than local storage, although it is not the most secure way.
                            </p>

                        </div>
                    </div>
                    <div className="my-8 ">
                        <div className=" text-2xl font-medium">
                            What is express js? What is Nest JS?
                        </div>
                        <div className="">
                            <p className="my-2">
                                <span className="font-semibold">Express js: </span>
                                Express.js is the most popular backend framework for Node. js, and it is an extensive part of the JavaScript ecosystem. It is designed to build single-page, multi-page, and hybrid web applications, it has also become the standard for developing backend applications with Node.
                            </p>
                            <p className="my-2">
                                <span className="font-semibold">Nest JS: </span>
                                Nest.JS is a framework for building efficient and scalable server-side applications using JavaScript or TypeScript. It is built on top of the widely popular Node.js runtime and leverages its asynchronous, event-driven nature to provide a robust and reliable platform for developing web applications.
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className=" text-2xl font-medium">
                            Explaining my code
                        </div>
                        <div className="">
                            <p>hello</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Blogs;