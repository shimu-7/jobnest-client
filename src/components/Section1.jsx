import { Link } from "react-router-dom";


const Section1 = () => {
    return (
        <div className="max-w-7xl mx-auto my-10 rounded-lg bg-base-200">
            <div className="py-8">
                <div className="flex gap-8 text-lg justify-center items-center">
                    <Link to="/login" className="border-2 rounded-md font-medium border-slate-900 px-5 py-2">
                        Sign in
                    </Link>
                    <Link to="/register" className="underline font-semibold">
                        Register
                    </Link>
                </div>
                <h2 className="text-lg mt-2 text-center">Sign in to post a Job, view your posted job and applied job</h2>
            </div>
        </div>
    );
};

export default Section1;