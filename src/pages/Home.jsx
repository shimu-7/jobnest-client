import { useContext, useEffect, useState } from "react";
import NavBar from "../shared/NavBar";
import { Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Section1 from "../components/section1";
import Section2 from "../components/Section2";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import HomeJob from "../components/HomeJob";



const Home = () => {
    const [categories, setCategories] = useState([])
    const [showJobs, setShowJobs] = useState([])
    const { loading } = useContext(AuthContext)
    const allJobs = useLoaderData();
    const [flag, setFlag] = useState("");
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const handleSearch = e =>{
        e.preventDefault();
        const searchValue = e.target.job.value.toLowerCase();
        console.log(searchValue);
        const searchedJob= allJobs.filter(job=>job.title.toLowerCase().includes(searchValue));
        console.log(searchedJob);
        //setShowJobs(jobs);   
        setShowJobs(searchedJob);   
    }

    const handleCategory = (category) => {
        setFlag(category);
        const jobs = allJobs.filter(job => job.category === category);
        console.log(category);

        console.log(allJobs, jobs);
        setShowJobs(jobs)
        setShowJobs(jobs)
        console.log(showJobs);
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="hero h-[400px] md:h-96" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/laptop-eyeglasses-mouse-diary-pen-pot-plant-black-background_23-2148042031.jpg?size=626&ext=jpg&ga=GA1.1.450165047.1695670968&semt=ais)' }}>
                {/* <div className="hero-overlay "></div> */}
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full mx-auto">
                        <h1 className="mb-5 text-3xl text-white font-bold">Unlock Your Potential</h1>
                        <p>With a world of opportunities at your fingertips, we're here to guide you towards success. <br /> Let's make your aspirations a reality together.</p>
                        <div className="mt-5">
                            <form onSubmit={handleSearch} className="w-full ">
                                <input type="text" placeholder="Enter Job Name" name="job" id="" className="py-3 mr-2 md:w-2/3 px-2 rounded-lg" />
                                <input type="submit" value="Search" className=" btn bg-pink-700 text-white border py-3 rounded-lg " />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Section1></Section1>
            <div className="max-w-7xl mx-auto">

                <div className="mx-auto">
                    <h2 className="text-3xl text-center font-semibold mt-10 mb-5">Job Category</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            categories.map(category => <Tab onClick={() => handleCategory(category.category)} className={`${(flag === category.category) ? "btn bg-pink-700 text-white" : "btn btn-outline"} px-5`} key={category._id}
                            >
                                {category.category}
                            </Tab>)
                        }
                    </div>
                   
                    <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-5">
                        
                        {
                            showJobs?.map(job => <HomeJob key={job._id} job={job}></HomeJob>)
                        }
                    </div>
                </div>



            </div>

            <Section2></Section2>



        </div>
    );
};

export default Home;