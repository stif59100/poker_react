import Axios from "axios";
import { makeAutoObservable } from 'mobx';
import BackEndRequest from './BackEndRequest';

class PlayerRoundsModel {

    _roundByUser = [];
    _userByRound = [];
    constructor() {
        // fonctionnalité d'observation si maj les components se mettent à jour grâce à cette fonctionnalité
        makeAutoObservable(this);
    }

    // requête asynchrone permettant de récupérer les infos de la bdd côté back end node js
    async fetchUsers(id_round) {
         await Axios.get(BackEndRequest.UsersByRound + id_round)
            .then((result) => {
                this._userByRound = result.data;
            })
            .catch();
    }

    async fetchRounds(id_user) {
         await Axios.get(BackEndRequest.RoundByUser + id_user)
            .then((result) => {
                this._roundByUser = result.data;
            }).catch();
    }
    async registerRound(id_round, id_user) {
        var params = { id_round: id_round, id_user: id_user };
        await Axios.post(BackEndRequest.RoundRegister, params).then((result) => {
            if (result.affectedRows === 1) {
                this.fetchRounds(id_user)
            }
        })
    }

    async unRegisterRound(id_round, id_user) {
        var params = { id_round: id_round, id_user: id_user };
        await Axios.delete(BackEndRequest.RoundUnRegister, { data: params }).then((result) => {
            if (result.affectedRows === 1) {
                this.fetchRounds(id_user)
            }

        })
    }

    get RoundByUser(){
        return this._roundByUser;
    }
    
    get UserByRound(){
        return this._userByRound;
    }

}
export default new PlayerRoundsModel();