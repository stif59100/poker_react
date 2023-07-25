
import Axios from "axios";
import BackEndRequest from '../Constantes/BackEndRequest';
const token = localStorage.getItem("token")
const AxiosHeader = {
    headers:
    {
        "Authorization": `Bearer ${token}`
    }
}
 const GetRights = async (setRights) => {
     await Axios.get(BackEndRequest.Rights,AxiosHeader)
        .then((response) => {
            setRights(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

 const GetRightsByUser = async (user_id,setRightsSelected) => {
     await Axios.get(BackEndRequest.RightsByUser + user_id,AxiosHeader)
         .then((response) => {
            console.log(response.data)
             setRightsSelected(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export {
    GetRightsByUser,
    GetRights
}