import { useContext, useState } from "react";
import NavBar from "../shared/NavBar";
import UserProfileNavbar from "../shared/UserProfileNavbar";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MyTableRow from "../components/MyTableRow";


const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const allJobs = useLoaderData();
    const jobs = allJobs.filter(job => job.email === user.email);
    const [myJobs, setMyJobs] = useState(jobs);
    console.log(allJobs, myJobs);

    return (
        <div>
            <NavBar></NavBar>
            <UserProfileNavbar></UserProfileNavbar>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold text-center my-8">My Added Jobs</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Posting Date</th>
                                <th>Application Deadline</th>
                                <th>Salary Range</th>
                                <th>category</th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myJobs.map(job => <MyTableRow key={job.id} myJobs={myJobs} setMyJobs={setMyJobs} job={job}></MyTableRow>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyJobs;