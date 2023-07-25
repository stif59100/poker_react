import { Redirect } from "react-router-dom";
import { LogOff } from "../../Services/UserService";

// Deconnexion de l'utilisateur.
const LogOut = (props) =>{
    LogOff();
    return <Redirect to="/"/>
}
export default LogOut;           