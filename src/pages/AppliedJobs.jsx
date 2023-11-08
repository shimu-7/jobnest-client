import { useContext, useEffect, useRef, useState } from "react";
import NavBar from "../shared/NavBar";
import { AuthContext } from "../providers/AuthProvider";
import UserProfileNavbar from "../shared/UserProfileNavbar";
import AppliedJob from "../components/AppliedJob";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import generatePDF from "react-to-pdf";


const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const targetRef = useRef();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    useEffect(() => {
        axios.get(`https://job-seeking-server-eta.vercel.app/applied?email=${user?.email}`, {
            withCredentials: true
        })
            .then(res => {
                setAppliedJobs(res.data);
                console.log('axios')
            })
    }, [])

    useEffect(() => {
        const jobs = appliedJobs.filter(job => job.aEmail === user.email);
        setDisplayJobs(jobs);
    }, [appliedJobs,user.email])
    console.log(displayJobs)
    const handleJobsFilter = filter => {

        if (filter === 'All') {
            setDisplayJobs(appliedJobs);
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
            <Helmet>
                <title>JobNest-Applied Job</title>
            </Helmet>
            <NavBar></NavBar>
            <UserProfileNavbar></UserProfileNavbar>

            <div ref={targetRef} className="max-w-7xl mt-5 mx-auto">
                <h2 className="text-3xl font-semibold text-center">My Applied Job List</h2>
                <div className="flex justify-between">
                    <button className="btn bg-pink-700 text-white" onClick={() => generatePDF(targetRef, { filename: 'page.pdf' })}>Download PDF</button>

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        displayJobs.map(job => <AppliedJob key={job._id} job={job}></AppliedJob>)
                    }
                </div>


            </div>


        </div>
    );
};

export default AppliedJobs;