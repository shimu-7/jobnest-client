import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import NavBar from "../shared/NavBar";
import UserProfileNavbar from "../shared/UserProfileNavbar";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const UpdateJob = () => {
    const job = useLoaderData();
    const { user } = useContext(AuthContext);
    const { poster, email, _id, title, category, photo, description, salary, deadline, applicants, pDate } = job;
    const handleUpdateJob = e => {
        e.preventDefault();
        const title = e.target.jTitle.value;
        const category = e.target.jCategory.value;
        const photo = e.target.photo.value;
        const description = e.target.description.value;
        const salary = e.target.salary.value;
        const deadline = e.target.deadline.value;
        const applicants = e.target.applicants.value;
        const poster = user.displayName;
        const email = user.email;

        const updatedJob = { poster, email, title, category, photo, description, salary, deadline, applicants, pDate };
        console.log(updatedJob);

        fetch(`http://localhost:5000/jobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Updated Successfully!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'OK'

                    })
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>JobNest-Update Job</title>
            </Helmet>
            <NavBar></NavBar>
            <UserProfileNavbar></UserProfileNavbar>
            <h1 className="text-4xl mt-5 text-center font-semibold">Update {title} </h1>
            <div className="max-w-7xl mx-auto">
                <form onSubmit={handleUpdateJob}>
                    <div className="md:flex gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Job Poster</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={user.displayName} className="input input-bordered w-full" name="" />
                            </label>
                        </div>

                    </div>
                    <div className="md:flex gap-3">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={title} className="input input-bordered w-full" name="jTitle" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Job Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={category} className="input input-bordered w-full" name="jCategory" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={photo} className="input input-bordered w-full" name="photo" />
                            </label>
                        </div>

                    </div>
                    <div className="md:flex gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Job Description</span>
                            </label>
                            <label className="input-group">
                                {/* <input type="text" placeholder="About Product" className="input input-bordered w-full" name="description" /> */}
                                <textarea className="textarea w-full textarea-bordered h-24" defaultValue={description} name="description"></textarea>
                            </label>
                        </div>

                    </div>
                    <div className="md:flex gap-3">
                        <div className="form-control md:w-1/3">
                            <label className="label">
                                <span className="label-text">Salary Range</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={salary} className="input input-bordered w-full" name="salary" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/3">
                            <label className="label">
                                <span className="label-text">Application Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="date" defaultValue={deadline} className="input input-bordered w-full" name="deadline" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/3">
                            <label className="label">
                                <span className="label-text">Total Applicants</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={applicants} className="input input-bordered w-full" name="applicants" />
                            </label>
                        </div>
                    </div>



                    <div>

                        <input type="submit" value="Update Job" className=" mt-3 btn bg-pink-700 text-white font-bold input input-bordered w-full" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default UpdateJob;