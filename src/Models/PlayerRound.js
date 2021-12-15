import Axios from "axios";
import {makeAutoObservable} from 'mobx';

class PlayerRound{
    urlbymanche = 'http://localhost:8080/joueurmancheparmanche/';
    urlbyuser =  "http://localhost:8080/joueurmancheparutilisateur/";
    name=''
    _users = [];
    _manches = [];

    constructor(){
        this.fetchManche(9)
        makeAutoObservable(this);
    }
    
    fetchUsers(id_manche){
        Axios.get(this.urlbymanche+id_manche)
        .then((result)=>{
            console.log(result.data);  
            this.users = result.data;
        }
        ).catch();
    }

    fetchManche(id_joueur){
        Axios.get(this.urlbyuser+id_joueur)
        .then((result)=>{
            console.log("je suis dans fetch  manche")
            console.log(result.data); 
            this.manches = result.data;
            console.log(this.manches); 

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
    get manches(){
        console.log("je suis dans get manche")
        console.log(this._manches)

        return this._manches;
    }
    set manches(value){
        console.log("setter manches")
        console.log(value)
        this._manches = value;
    }
}
export default new PlayerRound();