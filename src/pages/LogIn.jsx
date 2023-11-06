import { Link } from "react-router-dom";


const LogIn = () => {
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email, pass);
    }

    const handleGoogleLogIn = e => {
        e.preventDefault();
    }
    return (
        <div>
           

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
                                <button className="btn bg-pink-700 text-white border py-2 rounded-lg ">Login</button>
                            </div>
                            <p className="text-center">or</p>
                            <button onClick={handleGoogleLogIn} className="btn-outline  border py-2 rounded-lg"> <Link to="/">Continue with <span className="font-bold text-xl">Google</span></Link></button>

                            <p>Don't have an Account?<Link to="/register" className="text-red-700 font-medium">Register</Link>  </p>

                        </form>
                        

                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;