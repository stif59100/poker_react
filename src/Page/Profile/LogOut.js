import { Redirect } from "react-router-dom";

const LogOut = (props) =>{
    console.log(props)
    props.Profile.LogOut();

    return <Redirect to="/"/>
}
export default LogOut;           



