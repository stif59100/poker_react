import Axios from "axios";
import {makeAutoObservable} from 'mobx';

class PlayerRoundsModel{
    urlbyround = 'http://localhost:8080/roundByRoundId/';
    urlbyuser =  "http://localhost:8080/roundByUserId/";
    urlregister = "http://localhost:8080/roundplayer/register";
    urlunregister = "http://localhost:8080/roundplayer/unRegister";

    constructor(){
        // fonctionnalité d'observation si maj les components se mettent à jour grâce à cette fonctionnalité
        makeAutoObservable(this);
    }
    
    // requête asynchrone permettant de récupérer les infos de la bdd côté back end node js
    async fetchUsers(id_round){
        console.log(id_round)
        return await Axios.get(this.urlbyround+id_round)
        .then((result)=>{
           return  result.data;
        })
        .catch();
    }

    async fetchRounds(id_user){
        return await Axios.get(this.urlbyuser+id_user)
        .then((result)=>{
           return result.data;
        }).catch();
    }
    async registerRound(id_round,id_user){
        var params ={id_round:id_round,id_user:id_user};
        await Axios.post(this.urlregister,params).then((result)=>{
            if(result.affectedRows == 1){

            }
        })
    }

    async unRegisterRound(id_round,id_user){
        var params ={id_round:id_round,id_user:id_user};
        await Axios.delete(this.urlunregister, { data : params}).then((result)=>{
            if(result.affectedRows == 1){
            }
     
        })
    }
    
}
export default new PlayerRoundsModel();