import Axios from "axios";
import BackEndRequest from '../Constantes/BackEndRequest';
import sha256 from "sha256";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import { GetRights } from "./RigthService"
import Profile from "../Models/Profile";


const GetProfile = async (emailOrLogin, password, setUser) => {
    var passwordHash = sha256(password);
    var userBeforeAuth = { emailOrLogin: emailOrLogin, password: passwordHash }
    Axios.post(BackEndRequest.Authentication, userBeforeAuth)
        .then((response) => {
            return response.data
        }).then(async (user) => {
            if (typeof user.email_user === "undefined") {
                console.log("error user emty ")
                return;
            }
            const rights = await GetRights(user.id_user);
            const userIdentifier = {
                id: user.id_user,
                lastName: user.name_user,
                firstName: user.firstname_user,
                email: user.email_user,
                pseudo: user.pseudo_user,
                loggedIn: true,
                rights: rights
            };

            localStorage.setItem("user", JSON.stringify(userIdentifier));
            setUser(userIdentifier);
        })
        .catch(function (error) {
            console.log(error);
        });
}

const HaveRight = (right) => {
    const { user } = useContext(UserContext);
    console.log(right)
    console.log(user.rights)
    return user.rights.some((currentRight) => currentRight.name_right === right);
}

const LogOut = () => {
    const { setUser } = useContext(UserContext);
    localStorage.removeItem('user');
    setUser(new Profile())
}

const RegisterFn = (user) => {
    Axios.post(BackEndRequest.Register, user)
        .then((result) => {
            let resultText = "";

            // Tableau ordinal contenant 0 ou 1 objet JSON
            if (result.affectedRows === 1) {
                resultText = "Vous êtes inscrit !"
            } else {
                resultText = result[0]
            }
        },
            (error) => {
                // Erreur HTTP
                console.log(error)
            }
        )
}

export { GetProfile, RegisterFn, LogOut, HaveRight }