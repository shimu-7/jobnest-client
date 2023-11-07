import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const UserProfileBody = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="border">
            <div className="flex flex-col md:flex-row p-5">
                <div className="md:w-1/3">
                    <img src={user?.photoURL} alt="" />
                    <div>
                    <h2 className="text-xl font-bold">Programming Language</h2>
                        <h3>C, C++</h3>
                        <h3>JavaScript</h3>
                        <h2 className="text-xl font-bold">Others</h2>
                        <h3>HTML</h3>
                        <h3>CSS, Tailwind CSS</h3>
                        <h3>React</h3>
                        
                        <Link to="/blogs" className="text-xl font-semibold text-blue-600">Blog entries</Link>

                    </div>
                </div>
                <div className="flex flex-col md:w-2/3">
                    <div className="mb-8">
                        <h2 className="text-xl mb-3 font-bold">About Me</h2>
                        <p>
                            I am {user.displayName} and I am a final year student of CSE department in Comilla University. I am a competitive programmer. I am a two time NGPC participant. Now, I am learning web development using react-router, Daisy UI as front end and mongodb, express.js as backend.
                            (This is a static part,,hope to make this part dynamic later by storing user info in mongodb)
                        </p>
                    </div>
                    <div className="h-[1px] border"></div>
                    <div className="overflow-x-auto">
                        <table className="table ">
                            {/* head */}
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>Name</th>
                                    <td>{user?.displayName}</td>

                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>Email</th>
                                    <td>{user?.email}</td>

                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>Phone</th>
                                    <td>018********</td>

                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <th>Profession</th>
                                    <td>Student</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default UserProfileBody;