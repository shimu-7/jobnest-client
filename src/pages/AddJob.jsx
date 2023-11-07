import NavBar from "../shared/NavBar";
import UserProfileNavbar from "../shared/UserProfileNavbar";



const AddJob = () => {
    const handleAddJob = e =>{
        e.preventDefault()
    }
    return (
        <div>
            <NavBar></NavBar>
            <UserProfileNavbar></UserProfileNavbar>
            <div className="max-w-7xl mx-auto">
                <form onSubmit={handleAddJob}>
                    <div className="md:flex gap-3">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Job Title" className="input input-bordered w-full" name="jTitle" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Job Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Brand Name" className="input input-bordered w-full" name="bName" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Photo Url" className="input input-bordered w-full" name="photo" />
                            </label>
                        </div>

                    </div>
                    <div className="md:flex gap-3">
                        <div className="form-control md:w-1/3">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Product Type" className="input input-bordered w-full" name="type" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/3">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Price" className="input input-bordered w-full" name="price" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/3">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Rating" className="input input-bordered w-full" name="rating" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                {/* <input type="text" placeholder="About Product" className="input input-bordered w-full" name="description" /> */}
                                <textarea className="textarea w-full textarea-bordered h-24" placeholder="About Product" name="description"></textarea>
                            </label>
                        </div>

                    </div>


                    <div>

                        <input type="submit" value="Post Job" className=" mt-3 btn bg-pink-700 text-white font-bold input input-bordered w-full" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddJob;