import { Link, useLoaderData, useParams } from "react-router-dom";
import NavBar from "../shared/NavBar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const JobDetails = () => {
    const job = useLoaderData();
    const { user } = useContext(AuthContext);
    // const job = jobs.find(job => job._id == id);
     const  {poster,email,_id, title, category, photo, description, salary, deadline, applicants,pDate} =job;
    console.log(job)
    const handleApply = () =>{

    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="card bg-base-100 shadow-xl my-10">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge text-white badge-error">{category}</div>
                    </h2>
                    
                    <p>Salary: ${salary}</p>
                    <p>Deadline: {deadline}</p>
                    <p>{description}</p>


                    <div className="card-actions flex justify-center mt-3 w-full">
                        
                        <button onClick={handleApply} className="btn bg-pink-700 text-white border py-3 rounded-lg w-full">Apply Now</button>
                        <Link className='w-full' to={`/allJob`}><button className="btn btn-outline btn-secondary py-3 rounded-lg w-full">Go Back</button></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default JobDetails;