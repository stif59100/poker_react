import { Redirect } from "react-router-dom";

// Deconnexion de l'utilisateur.
const LogOut = (props) =>{
    props.Profile.LogOut();

    return <Redirect to="/"/>
}
export default LogOut;           