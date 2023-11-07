
import NavBar from "../shared/NavBar";
import UserProfileBody from "../components/UserProfileBody";
import UserProfileNavbar from "../shared/UserProfileNavbar";


const UserProfile = () => {

    return (
        <div className="mx-auto max-w-7xl w-full">
            <NavBar></NavBar>
            <UserProfileNavbar></UserProfileNavbar>
            
           <UserProfileBody></UserProfileBody>

        </div>
    );
};

export default UserProfile;