import Axios from "axios";
import {makeAutoObservable} from 'mobx';

class PlayerRound{
    urlbyround = 'http://localhost:8080/roundByRoundId/';
    urlbyuser =  "http://localhost:8080/roundByUserId/";
    name=''
    _users = [];
    _rounds = [];

    constructor(){
        makeAutoObservable(this);
    }
    
    fetchUsers(id_round){
        Axios.get(this.urlbyround+id_round)
        .then((result)=>{
            console.log(result.data);  
            this.users = result.data;
        }
        ).catch();
    }

    fetchround(id_user){
        Axios.get(this.urlbyuser+id_user)
        .then((result)=>{
            console.log("je suis dans fetch  round")
            console.log(result.data); 
            this.rounds = result.data;
            console.log(this.rounds); 

        }
        ).catch();
    }
    get users(){
        console.log(this._users)
        return this._users;
    }
    set users(value){
        this._users = value;
    }
    get rounds(){
        console.log("je suis dans get round")
        console.log(this._rounds)

        return this._rounds;
    }
    set rounds(value){
        console.log("setter rounds")
        console.log(value)
        this._rounds = value;
    }
}
export default new PlayerRound();