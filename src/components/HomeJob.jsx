import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const HomeJob = ({job}) => {
   //const {poster,email,_id, title, category, photo, description, salary, deadline, applicants,pDate}= job
    const {poster,_id, title, category, photo, salary}= job
    return (
        <div>
            {
                <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="max-w-sm h-60" src={photo} alt="Movie"/></figure>
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <p><span className="font-semibold">Posted by</span>: {poster}</p>
                  <p><span className="font-semibold">Category</span>: {category}</p>
                  <p><span className="font-semibold">Salary</span>: {salary}</p>
                  <Link className="w-full" to={`/jobDetails/${_id}`}><button className="btn btn-outline btn-secondary">Views Details</button></Link>
                </div>
              </div>
            }
        </div>
    );
};

HomeJob.propTypes = {
    job: PropTypes.object
}

export default HomeJob;