import Axios from "axios";
import BackEndRequest from '../Constantes/BackEndRequest';
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import Profile from "../Models/Profile";
import sha512 from "js-sha512";
import { DecryptTokenProfile } from './TokenService'
const token = localStorage.getItem("token")
const AxiosHeader = {
    headers:
    {
        "Authorization": `Bearer ${token}`
    }
}

const GetUsers = async (setUsers) => {
    Axios.get(BackEndRequest.GetUsers, AxiosHeader).then((response) => {
        console.log(response)
        if (response.status === 200) {
                    setUsers(response.data);
        }
    })
}
const GetUserById = async (id,setUser) => {
    Axios.get(BackEndRequest.GetUserById + id, AxiosHeader).then((response) => {
        setUser(response.data);
    })
}
const GetProfile = async (emailOrLogin, password, setUser, setErrorsForm,setRightsSelected) => {
    var passwordHash = sha512(password);
    var userBeforeAuth = { emailOrPseudo: emailOrLogin, password: passwordHash };
    Axios.post(BackEndRequest.Authentication, userBeforeAuth)
        .then((response) => {
            return response.data
        }).then(async (result) => {
            if (typeof result?.token === "undefined") {
                console.log("error user empty ")
                throw new Error('utilisateur introuvable.');
            }
            const userIdentifier = DecryptTokenProfile(result.token)
            // sessionStorage.setItem("user", userToken.token);
            setRightsSelected(userIdentifier.rights)
            setUser(userIdentifier);
        })
        .catch(function (error) {
            console.log(error);
            var errorDisplay = { message: error };
            setErrorsForm([errorDisplay]);
            return;
        });
}

const HaveRight = (right) => {
    const { user } = useContext(UserContext);
    console.log(right)
    let result = user.rights.includes(right);
    console.log("result",result)
    return result
}

const LogOff = () => {
    const { setUser } = useContext(UserContext);
    localStorage.removeItem('token');
    setUser(new Profile())
}

const RegisterFn = (user, setErrorsForm, setSuccessForm) => {
    var passwordHash = sha512(user.password_user);
    const userRegister = {
        "lastname": user.name_user,
        "firstname": user.firstname_user,
        "pseudo": user.pseudo_user,
        "email": user.email_user,
        "password": passwordHash
    }
    Axios.post(BackEndRequest.Register, userRegister)
        .then((result) => {
            // Tableau ordinal contenant 0 ou 1 objet JSON
            if (result.status === 200) {
                setSuccessForm([{ message: "Vous êtes inscrit !" }]);
            } else {
                setErrorsForm([{ message: "Une erreur c'est produit lors de l'enregistrement" }]);
            }
        })
}

export { GetProfile, RegisterFn, LogOff, HaveRight, GetUsers,GetUserById}