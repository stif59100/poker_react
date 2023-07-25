import jwt_decode from "jwt-decode";
import { compareAsc } from 'date-fns'

const DecryptTokenProfile = (token) => {
          localStorage.setItem("token", token);
            var userToken =  jwt_decode(token)
            const userIdentifier = {
                id: userToken.id,
                lastName: userToken.name,
                firstName: userToken.family_name,
                email: userToken.email,
                pseudo: userToken.pseudo,
                loggedIn: true,
                rights: JSON.parse(userToken.rights)
    };
    return userIdentifier;
}
const GetTokenAxios = () => {
  const token = localStorage.getItem("token")
    return {
        headers:
        {
            "Authorization": `Bearer ${token}`
        }
    }
}
const ValidateToken =  (setUser) => {
    if (localStorage.getItem("token")){
        var token =  jwt_decode(localStorage.getItem("token"))
        if (compareAsc(new Date(new Date().toUTCString()).getTime()/1000,token.exp) === 1) {
            localStorage.removeItem("token");
            setUser();
        }
        else {
           setUser(DecryptTokenProfile(localStorage.getItem("token")))
        }
    }
}
export  { DecryptTokenProfile,ValidateToken,GetTokenAxios}