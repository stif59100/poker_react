import Axios from "axios";
import { makeAutoObservable } from 'mobx';
import  sha256  from "sha256";
import  Rights  from "./Rights";
import PlayerRoundsModel from "./PlayerRoundsModel";
class Profile 
{
    _urlAuthentication = 'http://localhost:8080/authentication';
    _user = {}
    _loggedIn = false;

    constructor() {
        makeAutoObservable(this);
         this.getCurrentUser();
    }

    fetchGetProfile(emailOrLogin, password) {
        var passwordHash = sha256(password);
        var userBeforeAuth = { emailOrLogin: emailOrLogin, password: passwordHash }
        Axios.post(this._urlAuthentication, userBeforeAuth)
            .then((response) => {
                return response.data
            }).then((user)=>{
                if(typeof user.email_user === "undefined"){
                    console.log("error user emty fetch")
                    return;
                }
                console.log(user)
                this._user.firstName = user.firstname_user;
                this._user.lastName = user.name_user;
                this._user.email = user.email_user;
                this._user.id =  user.id_user;

                this._loggedIn = true;      
                localStorage.setItem("user", JSON.stringify(this._user));
                this._user.rights = Rights.getRights(this._user.id)
                this._user.rounds = PlayerRoundsModel.fetchRound(this._user.id)
                 })
            .catch(function (error) {
                console.log(error);
            });
    }
    async getCurrentUser(){
        var user =  JSON.parse(localStorage.getItem("user"));
        if(user){
            this._user.firstName = user.firstName;
            this._user.lastName = user.lastName;
            this._user.email = user.email;
            this._user.rights = user.rights;
            this._user.id =  user.id;
            this._loggedIn=true;
            this._user.rights = await Rights.fetchGetRights(this._user.id);
            this._user.rounds = await PlayerRoundsModel.fetchRounds(this._user.id)
        }
    };
    LogOut(){
        localStorage.removeItem('user');
        this._loggedIn = false;
    }

    get loggedIn(){
        return this._loggedIn;
    }

    get user(){
        return this._user;
    }
}

export default new Profile();