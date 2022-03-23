import Axios from "axios";
import { makeAutoObservable } from 'mobx';
import sha256 from "sha256";
import Rights from "./Rights";
import PlayerRoundsModel from "./PlayerRoundsModel";
import BackEndRequest from './BackEndRequest';
class Profile {
    _loggedIn = false;
    _id = null;
    _lastName = null;
    _firstName = null;
    _email = null;
    _pseudo = null;
    _rights = [];
    _rounds = [];
    constructor() {
        makeAutoObservable(this);
        this.getCurrentUser();
    }

    async fetchGetProfile(emailOrLogin, password) {
        var passwordHash = sha256(password);
        var userBeforeAuth = { emailOrLogin: emailOrLogin, password: passwordHash }
        Axios.post(BackEndRequest.Authentication, userBeforeAuth)
            .then((response) => {
                return response.data
            }).then((user) => {
                if (typeof user.email_user === "undefined") {
                    console.log("error user emty fetch")
                    return;
                }
                this._id = user.id_user;
                this._lastName = user.name_user;
                this._firstName = user.firstname_user;
                this._email = user.email_user;
                this._pseudo = user.pseudo_user;
                this._loggedIn = true;
                localStorage.setItem("user", JSON.stringify(this));
                this._rights =   Rights.fetchGetRights(this._id);
                this._rounds =   PlayerRoundsModel.fetchRounds(this._id);
                
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    async getCurrentUser() {
        // on stock en json les informations de la requêtes on désérialise la requête
        var user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            this._id = user._id;
            this._lastName = user._lastName;
            this._firstName = user._firstName;
            this._email = user._email;
            this._pseudo = user._pseudo;
            this._loggedIn = true;
            this._rights =  await Rights.fetchGetRights(this._id);
            this._rounds =  await PlayerRoundsModel.fetchRounds(this._id);
            console.log( this._rights )
            console.log( this._rounds )

        }
    };
    LogOut() {
        localStorage.removeItem('user');
        this._loggedIn = false;
    }

    get loggedIn() {
        return this._loggedIn;
    }

    get id() {
        return this._id;
    }
    get login() {
        return this._pseudo;
    }
    get firstName() {
        return this._firstName;
    }
    get email() {
        return this._email;
    }
    get lastName() {
        return this._lastName;
    }
    get rights() {
        return this._rights;
    }
    get rounds() {
        return this._rounds;
    }
    get pseudo() {
        return this._pseudo;
    }

}

export default new Profile();