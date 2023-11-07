import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const TableRow = ({job}) => {
    const  {poster,email,_id, title, category, photo, description, salary, deadline, applicants,pDate} =job;
    return (
        
            <tr>
                <td>{poster}</td>
                <td>{title}</td>
                <td>{pDate}</td>
                <td>{deadline}</td>
                <td>{applicants}</td>
                <td>{salary}</td>
                <td>
                    <Link className="w-full" to={`/jobDetails/${_id}`}><button className="btn btn-outline btn-secondary">Views Details</button></Link>
                </td>
            </tr>
            
       
    );
};
TableRow.propTypes = {
    job: PropTypes.object
}
export default TableRow;