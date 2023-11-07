import { PropTypes } from "prop-types";

const TableRow = ({job}) => {
    const  {poster,email, title, category, photo, description, salary, deadline, applicants,pDate} =job;
    return (
        
            <tr>
                <td>{poster}</td>
                <td>{title}</td>
                <td>{pDate}</td>
                <td>{deadline}</td>
                <td>{applicants}</td>
                <td>{salary}</td>
                <td>
                    <button className="btn btn-outline btn-secondary">Views Details</button>
                </td>
            </tr>
            
       
    );
};
TableRow.propTypes = {
    job: PropTypes.object
}
export default TableRow;