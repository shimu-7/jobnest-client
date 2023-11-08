import { PropTypes } from "prop-types";

const AppliedJob = ({job}) => {
    //const {aName, aEmail, poster, email, jobId, title, category, photo, description, salary, deadline, applicants:newApplicants, pDate}= job
    const {poster, title, category, photo, salary, deadline}= job
    return (
        <div>
            {
                <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="max-w-sm h-60" src={photo} alt="Movie"/></figure>
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <p><span className="font-semibold">Posted by</span>: {poster}</p>
                  <p><span className="font-semibold">Category</span>: {category}</p>
                  <p><span className="font-semibold">Application Deadline</span>: {deadline}</p>
                  <p><span className="font-semibold">Salary</span>: {salary}</p>
                  
                </div>
              </div>
            }
        </div>
    );
};

AppliedJob.propTypes = {
    job: PropTypes.object
}

export default AppliedJob;