import { useContext } from "react";
import NavBar from "../shared/NavBar";
import UserProfileNavbar from "../shared/UserProfileNavbar";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";



const AddJob = () => {
    const { user } = useContext(AuthContext)
    const handleAddJob = e => {
        e.preventDefault();
        const title = e.target.jTitle.value;
        const category = e.target.jCategory.value;
        const photo = e.target.photo.value;
        const description = e.target.description.value;
        const salary = e.target.salary.value;
        const deadline = e.target.deadline.value;
        const applicants = e.target.applicants.value;
        const poster= user.displayName;
        const email= user.email;
        const pDate = e.target.pDate.value;


        const newJob = {poster,email, title, category, photo, description, salary, deadline, applicants,pDate};
        console.log(newJob)


        fetch('http://localhost:5000/jobs',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId)
            {
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulation',
                    text: 'Job Posted Successfully',
                    
                  })
            }
        })
    }
    return (
        <div>
            <NavBar></NavBar>
            <UserProfileNavbar></UserProfileNavbar>
            <h1 className="text-4xl mt-5 text-center font-semibold">Add a Job</h1>
            <div className="max-w-7xl mx-auto">
                <form onSubmit={handleAddJob}>
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
                                <input type="text" placeholder="Job Title" className="input input-bordered w-full" name="jTitle" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Job Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Job Category" className="input input-bordered w-full" name="jCategory" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Photo Url" className="input input-bordered w-full" name="photo" />
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
                                <textarea className="textarea w-full textarea-bordered h-24" placeholder="About Job" name="description"></textarea>
                            </label>
                        </div>

                    </div>
                    <div className="md:flex gap-3">
                        <div className="form-control md:w-1/4">
                            <label className="label">
                                <span className="label-text">Salary Range</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Salary Range" className="input input-bordered w-full" name="salary" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/4">
                            <label className="label">
                                <span className="label-text">Posting Date</span>
                            </label>
                            <label className="input-group">
                                <input type="date" defaultValue={Date.now()} className="input input-bordered w-full" name="pDate" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/4">
                            <label className="label">
                                <span className="label-text">Application Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="date" placeholder="Application Deadline" className="input input-bordered w-full" name="deadline" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/4">
                            <label className="label">
                                <span className="label-text">Total Applicants</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={0} className="input input-bordered w-full" name="applicants" />
                            </label>
                        </div>
                    </div>



                    <div>

                        <input type="submit" value="Post Job" className=" mt-3 btn bg-pink-700 text-white font-bold input input-bordered w-full" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddJob;