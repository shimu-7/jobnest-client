import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import NavBar from "../shared/NavBar";
import { Helmet } from "react-helmet-async";


const LogIn = () => {

    const [logError, setLogError] = useState(null)

    const { googleSignIn, logIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email, pass);
        setLogError(null)

        logIn(email, pass)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    
                    icon: 'success',
                    imageUrl: result.user.photoURL,
                    imageWidth: 100,
                    imageHeight: 100,
                    title: result.user.displayName,
                    text: 'logged in successfully',

                })
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')
                }, 1000);
            })
            .catch(error => {
                setLogError(error.message);
            })
    }

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'User Logged in successfully',

                })
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')
                }, 1000);

            })
            .catch(error => {
                setLogError(error.message);
            })
    }
    return (
        <div>
            <Helmet>
                <title>JobNest-Sign in</title>
            </Helmet>
            <NavBar></NavBar>

            <div className="hero min-h-screen ">

                <div className="hero-content flex-col">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-8">

                        <h1 className="text-4xl font-bold text-center my-5">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-pink-700 text-white border py-2 rounded-lg ">Sign in</button>
                            </div>
                            <p className="text-center">or</p>
                            <button onClick={handleGoogleLogIn} className="btn-outline  border py-2 rounded-lg"> <Link to="/">Continue with <span className="font-bold text-xl">Google</span></Link></button>

                            <p>Don't have an Account?<Link to="/register" className="text-red-700 font-medium">Register</Link>  </p>

                        </form>
                        {
                            logError && <p className="text-red-500 pl-2 pb-2">{logError}</p>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;