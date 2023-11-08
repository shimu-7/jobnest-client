
import NavBar from "../shared/NavBar";
import UserProfileBody from "../components/UserProfileBody";
import UserProfileNavbar from "../shared/UserProfileNavbar";
import { Helmet } from "react-helmet-async";


const UserProfile = () => {

    return (
        <div className="mx-auto max-w-7xl w-full">
            <Helmet>
                <title>JobNest-Profile</title>
            </Helmet>
            <NavBar></NavBar>
            <UserProfileNavbar></UserProfileNavbar>
            
           <UserProfileBody></UserProfileBody>

        </div>
    );
};

export default UserProfile;