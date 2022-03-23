import Axios from "axios";
import { makeAutoObservable } from 'mobx';
import BackEndRequest from './BackEndRequest';

class PlayerRoundsModel {

    _roundByUser = [];
    constructor() {
        // fonctionnalité d'observation si maj les components se mettent à jour grâce à cette fonctionnalité
        makeAutoObservable(this);
    }

    async fetchRounds(id_user) {
         return await Axios.get(BackEndRequest.RoundByUser + id_user)
            .then((result) => {
               return result.data;
            }).then((rounds) => {
                this._roundByUser = rounds;
                return this._roundByUser;
            }).catch();
    }
    async registerRound(id_round, id_user) {
        var params = { id_round: id_round, id_user: id_user };
        await Axios.post(BackEndRequest.RoundRegister, params).then((result) => {
            if (result.affectedRows === 1) {
            }
        })
    }

    async unRegisterRound(id_round, id_user) {
        var params = { id_round: id_round, id_user: id_user };
        await Axios.delete(BackEndRequest.RoundUnRegister, { data: params }).then((result) => {
            if (result.affectedRows === 1) {
            }

        })
    }

    get RoundByUser(){
        return this._roundByUser;
    }
    
}
export default new PlayerRoundsModel();