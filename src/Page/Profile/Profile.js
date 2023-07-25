import ReadProfile from "./ReadProfile";
import { useContext } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import UserContext from "../../Context/UserContext";

// page permettant l'affichge du profil 
const Profile = (props) => {
    const { user } = useContext(UserContext)
    return (
        (user.loggedIn) ?
                <ReadProfile {...props} ></ReadProfile>
            : <Redirect to="/"></Redirect>
    )
};

export default Profile;
