import { Link, useLoaderData } from "react-router-dom";
import NavBar from "../shared/NavBar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const JobDetails = () => {
    const job = useLoaderData();
    const { user } = useContext(AuthContext);
    const { poster, email, _id, title, category, photo, description, salary, deadline, applicants, pDate } = job;
    console.log(job)
    const handleApply = () => {
        const aName = user.displayName;
        const jobId = _id;
        const aEmail = user.email;
        const tDate = new Date();
        const aDate = new Date(deadline);
        const newApplicants = parseInt(applicants) + 1;
        console.log(tDate, deadline)
        if (aEmail === email) {
            return Swal.fire({
                title: 'An error occurred !!!',
                text: 'Not Eligible to apply to your own job',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
        if (aDate < tDate) {
            return Swal.fire({
                title: 'An error occurred !!!',
                text: 'Application deadline expired',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
        const appliedJob = { aName, aEmail, poster, email, jobId, title, category, photo, description, salary, deadline, applicants:newApplicants, pDate }
        // else
        // {
        //     console.log('eligible')
        // }
        fetch(`https://job-seeking-server-eta.vercel.app/jobs/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ applicants: newApplicants })
        })
            .then(res => res.json())
            .then(data => console.log(data))

        fetch('https://job-seeking-server-eta.vercel.app/applied', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appliedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Congratulation!!!',
                        text: 'Product is Added to cart.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }
    return (
        <div>
            <Helmet>
                <title>JobNest-Job Details
                </title>
            </Helmet>
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