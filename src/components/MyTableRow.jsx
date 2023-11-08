import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyTableRow = ({ job, setMyJobs, myJobs }) => {
    const { poster, email, _id, title, category, photo, description, salary, deadline, applicants, pDate } = job;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobs/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your job is deleted.',
                                'success',
                            )
                            const remaining = myJobs.filter(pro => pro._id !== _id);
                            setMyJobs(remaining);

                        }
                    })
                console.log('Delete COnfirmed')
            }
        })

    }
    return (

        <tr>
            <td>{title}</td>
            <td>{pDate}</td>
            <td>{deadline}</td>
            <td>{salary}</td>
            <td>{category}</td>
            <td>
                <Link className="w-full mr-5" to={`/updateJob/${_id}`}><button className="btn btn-outline btn-secondary">Update</button></Link>
                <Link className="w-full" onClick={() => handleDelete(_id)}><button className="btn btn-outline btn-secondary">Delete</button></Link>
            </td>
        </tr>


    );
};

export default MyTableRow;