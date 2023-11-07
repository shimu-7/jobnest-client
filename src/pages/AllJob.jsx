import NavBar from "../shared/NavBar";
import { motion, useScroll } from "framer-motion"

import './Blogs.css'
import { useEffect, useState } from "react";
import TableRow from "../components/TableRow";

const AllJob = () => {
    const { scrollYProgress } = useScroll();
    const [jobs, setJobs] = useState([]);
    const [showJobs,setShowJobs] =useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {setJobs(data);
                setShowJobs(jobs)
            });
    }, [])
    
    const handleSearch = e =>{
        e.preventDefault();
        const searchValue = e.target.job.value.toLowerCase();
        console.log(searchValue);
        const searchedJob= jobs.filter(job=>job.title.toLowerCase().includes(searchValue));
        console.log(searchedJob);
        setShowJobs(searchedJob)
    }

    return (
        <div>

            <NavBar></NavBar>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress, height: '5px' }} />
            <div className="max-w-7xl mt-5 mx-auto">
                <div className="my-5 text-center">
                    <form className="w-full" onSubmit={handleSearch}>
                        <input type="text" placeholder="Enter Job Name" name="job" id="" className=" border py-3 mr-2 md:w-2/3 px-2 rounded-lg" />
                        <input type="submit" value="Search" className=" btn bg-pink-700 text-white border py-3 rounded-lg " />
                    </form>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Posted By</th>
                                <th>Job Title</th>
                                <th>Posting Date</th>
                                <th>Application Deadline</th>
                                <th>Total Applicants</th>
                                <th>Salary Range</th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showJobs.map(job => <TableRow key={job.id} job={job}></TableRow>)
                            }


                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    );
};

export default AllJob;