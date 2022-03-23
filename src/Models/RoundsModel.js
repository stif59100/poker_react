import {makeAutoObservable} from 'mobx';
import Axios from "axios";
import BackEndRequest from './BackEndRequest';
class RoundsModel {
    _rounds = [];

    constructor(){ 
        this.fetchGetRounds();
        makeAutoObservable(this);
    }
    
    async fetchGetRounds(){
        this._rounds = [];
        console.log(" je suis dnas le fecth rounds")
        await Axios.get(BackEndRequest.GetRounds)
        .then((result)=>{
            //this._rounds = result.data;
            result.data.forEach(element =>{
             this._rounds.push(this.daoToDto(element))   
            });
        }
        ).catch();
    }
    async fetchAddRound(round){
        await Axios.post(BackEndRequest.AddRound,round)
            .then((result)=>{
                this._rounds.push(this.daoToDto(result.data))  
            }
            ).catch();
    }

    get rounds(){
        return this._rounds;
    }

    async fetchdeleteRounds(rounds){
        
        console.log(" je suis dans le fecth rounds")
        await Axios.delete(BackEndRequest.DeleteRound, {data: rounds})
        .then((result)=>{
             
        }).catch();
    }
    daoToDto (dao){
        let dto = {
            id_round : dao.id_round, 
            name_round: dao.name_round,
            points_attributs: dao.points_attributs,
            open: dao.open,
            close: dao.open,
            max_player: dao.max_player,
            buy_in: dao.buy_in,
            rake : dao.rake,
            stack : dao.stack,
            addon: dao.addon,
            rebuy: dao.rebuy,
            bounty: dao.bounty,
            date_round: new Date(dao.date_round).toLocaleDateString(),
            hour_round: dao.hour_round,
        }
        return dto;
    }
}
export default new RoundsModel();