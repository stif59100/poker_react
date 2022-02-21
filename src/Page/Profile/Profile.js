import { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import EditMode from "./EditProfile";
import ReadMode from "./ReadProfile";
const Profile = (props) => {
    const [editMode, setEditMode] = useState(false);

    const HandleEditMode = () =>{
        setEditMode(true);
    }

    return (
        (props.Profile.loggedIn) ?
            (editMode) ?
                <EditMode Profile={props.Profile.user} HandleEditMode={HandleEditMode}></EditMode> :
                <ReadMode Profile={props.Profile.user} HandleEditMode={HandleEditMode}></ReadMode>
            : <Redirect to="/"></Redirect>
    )
};

export default Profile;
