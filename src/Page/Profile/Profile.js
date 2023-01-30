import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import ReadProfile from "./ReadProfile";


// page permettant l'affichge du profil 
const Profile = (props) => {
    return (
        (props.Profile.loggedIn) ?
                <ReadProfile {...props} ></ReadProfile>
            : <Redirect to="/"></Redirect>
    )
};

export default Profile;
