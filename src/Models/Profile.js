import Axios from "axios";
import { makeAutoObservable } from 'mobx';
import  sha256  from "sha256";

class Profile 
{
    _urlAuthentication = 'http://localhost:8080/authentication';
    _urlRights = 'http://localhost:8080/';
    _user = {}
    _loggedIn = false;
    constructor() {
        makeAutoObservable(this);
        this.getCurrentUser();
    }


    fetchGetRights(){
        var data = {id_user:this._id};
        Axios.post(this._urlRights,data)
        .then((response) => {
            return response.data
        }).then((rights)=>{
            this._user.rights = rights;
             })
        .catch(function (error) {
            console.log(error);
        });

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
                this._user.firstName = user.firstname_user;
                this._user.lastName = user.name_user;
                this._user.email = user.email_user;
                this._user.id =  user.id_user;

                this._loggedIn = true;
                localStorage.setItem("user", JSON.stringify(this._user));
                this.fetchGetRights();
                 })
            .catch(function (error) {
                console.log(error);
            });
    }
    getCurrentUser(){
        var user =  JSON.parse(localStorage.getItem("user"));
    
        if(user){
            this._user.firstName = user.firstName;
            this._user.lastName = user.lastName;
            this._user.email = user.email;
            this._user.id =  user.id;
            this._loggedIn=true;
        }
    };

    get loggedIn(){
        return this._loggedIn;
    }
}

export default new Profile();