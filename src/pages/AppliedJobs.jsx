import { useContext, useState } from "react";
import NavBar from "../shared/NavBar";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import UserProfileNavbar from "../shared/UserProfileNavbar";
import AppliedJob from "../components/AppliedJob";


const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const appliedJobs = useLoaderData();
    console.log(appliedJobs.length);
    const jobs = appliedJobs.filter(job => job.aEmail === user.email);
    console.log(jobs)
    const [displayJobs, setDisplayJobs] = useState(jobs);
    const handleJobsFilter = filter => {

        if (filter === 'All') {
            setDisplayJobs(jobs);
        }
        else if (filter === 'Remote') {
            const remoteJobs = appliedJobs.filter(job => job.category === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'On Site') {
            const remoteJobs = appliedJobs.filter(job => job.category === 'On Site');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'Hybrid') {
            const remoteJobs = appliedJobs.filter(job => job.category === 'Hybrid');
            setDisplayJobs(remoteJobs);
        }
        else {
            const onsiteJobs = appliedJobs.filter(job => job.category === 'Part Time');
            setDisplayJobs(onsiteJobs);
        }
    }
    return (
        <div>
            <NavBar></NavBar>
            <UserProfileNavbar></UserProfileNavbar>

            <div className="max-w-7xl mt-5 mx-auto">
                <h2 className="text-3xl font-semibold text-center">My Applied Job List</h2>
                <div className="flex justify-end">
                    <details className="dropdown mb-10">
                        <summary className="m-1 btn">filter by Category</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={() => handleJobsFilter('All')}><a>All</a></li>
                            <li onClick={() => handleJobsFilter('Remote')}><a>Remote</a></li>
                            <li onClick={() => handleJobsFilter('On Site')}><a>On Site</a></li>
                            <li onClick={() => handleJobsFilter('Hybrid')}><a>Hybrid</a></li>
                            <li onClick={() => handleJobsFilter('Part Time')}><a>Part Time</a></li>
                        </ul>
                    </details>
                </div>

                <div className="grid gap-5">
                    {
                        displayJobs.map(job => <AppliedJob key={job._id} job={job}></AppliedJob>)
                    }
                </div>


            </div>


        </div>
    );
};

export default AppliedJobs;