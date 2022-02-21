
import Axios from "axios";
import { makeAutoObservable } from 'mobx';
import BackEndRequest from './BackEndRequest';
class PlayerByRoundModel{
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
    get UserByRound(){
        return this._userByRound;
    }
}
export default new PlayerByRoundModel;