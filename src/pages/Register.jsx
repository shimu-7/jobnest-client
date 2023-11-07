import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import NavBar from "../shared/NavBar";


const Register = () => {

    const [regError, setRegError] = useState(null);
    const { createUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);
        setRegError(null);

        if (password.length < 6) {
            setRegError('password should be at least 6 characters or more')
            return;
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setRegError(' Password should contain at least one  special character')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setRegError('Password should contain Capital letter')
            return
        }


        createUser(email, password, name, photo)
            .then(result => {
                console.log(result.user);

                updateProfile(result.user, {
                    displayName: name, photoURL: photo
                })
                    .then()
                    .catch()

                Swal.fire({
                    icon: 'success',
                    imageUrl: photo,
                    imageWidth: 100,
                    imageHeight: 100,
                    title:name,
                    text: 'Successfully Registered ',
                })
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')
                    window.location.reload();
                }, 2000);

            })
            .catch(error => {
                console.log(error.message);
                setRegError(error.message);
            })

    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100 mx-8">

                        <h1 className="text-4xl font-bold text-center my-5">Please Register</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" placeholder="User Name" className="input input-bordered" name="name" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo" />
                            </div>
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
                                <button className="btn bg-pink-700 text-white">Register</button>
                            </div>
                            <p>Already have an account!!! Please <Link to="/login" className="text-red-700 font-medium">Sign in</Link></p>
                        </form>
                        {
                            regError && <p className="text-red-500 pl-2 pb-2">{regError}</p>
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;