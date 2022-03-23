import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import ReadMode from "./ReadProfile";


// page permettant l'affichge du profil 
const Profile = (props) => {
    return (
        (props.Profile.loggedIn) ?
                <ReadMode {...props} ></ReadMode>
            : <Redirect to="/"></Redirect>
    )
};

export default Profile;
