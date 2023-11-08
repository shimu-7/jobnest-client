import { useContext, useEffect, useState } from "react";
import NavBar from "../shared/NavBar";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import UserProfileNavbar from "../shared/UserProfileNavbar";
import AppliedJob from "../components/AppliedJob";
import { Helmet } from "react-helmet-async";
import axios from "axios";


const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const [appliedJobs, setAppliedJobs] = useState([]);

    console.log(appliedJobs.length);
    useEffect(() => {
        axios.get(`http://localhost:5000/applied?email=${user?.email}`, {
            withCredentials: true
        })
            .then(res => {
                setAppliedJobs(res.data);
                console.log('axios')
            })
    }, [])
    // console.log(appliedJobs.length);
    // const jobs = appliedJobs.filter(job => job.aEmail === user.email);
    // console.log(jobs)
    // const [displayJobs, setDisplayJobs] = useState(jobs);
    const handleJobsFilter = filter => {

        if (filter === 'All') {
            setAppliedJobs(jobs);
        }
        else if (filter === 'Remote') {
            const remoteJobs = appliedJobs.filter(job => job.category === 'Remote');
            setAppliedJobs(remoteJobs);
        }
        else if (filter === 'On Site') {
            const remoteJobs = appliedJobs.filter(job => job.category === 'On Site');
            setAppliedJobs(remoteJobs);
        }
        else if (filter === 'Hybrid') {
            const remoteJobs = appliedJobs.filter(job => job.category === 'Hybrid');
            setAppliedJobs(remoteJobs);
        }
        else {
            const onsiteJobs = appliedJobs.filter(job => job.category === 'Part Time');
            setAppliedJobs(onsiteJobs);
        }
    }
    return (
        <div>
            <Helmet>
                <title>JobNest-Applied Job</title>
            </Helmet>
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
                        appliedJobs.map(job => <AppliedJob key={job._id} job={job}></AppliedJob>)
                    }
                </div>


            </div>


        </div>
    );
};

export default AppliedJobs;