import Axios from "axios";
import BackEndRequest from '../Constantes/BackEndRequest';

const GetRounds = async (setRound) => {
    const rounds = [];
    await Axios.get(BackEndRequest.Rounds)
        .then((result) => {
            //this._rounds = result.data;
            result.data.forEach(element => {
                rounds.push(daoToDto(element))
            });
        }
        ).catch();
    setRound(rounds);
}
const AddRound = async (round) => {
    await Axios.post(BackEndRequest.AddRound, round)
        .then((result) => {
            this._rounds.push(daoToDto(result.data))
        }
        ).catch();
}



const DeleteRounds = async (rounds) => {
    console.log(" je suis dans le fecth rounds")
    await Axios.delete(BackEndRequest.DeleteRound, { data: rounds })
        .then((result) => {

        }).catch();
}
const daoToDto = (dao) => {
    let dto = {
        id_round: dao.id_round,
        name_round: dao.name_round,
        points_attributs: dao.points_attributs,
        open: dao.open,
        close: dao.open,
        max_player: dao.max_player,
        buy_in: dao.buy_in,
        rake: dao.rake,
        stack: dao.stack,
        addon: dao.addon,
        rebuy: dao.rebuy,
        bounty: dao.bounty,
        date_round: new Date(dao.date_round).toLocaleDateString(),
        hour_round: dao.hour_round,
    }
    return dto;
}

const UpdateRound = (round)=>{console.log(round)};
export { DeleteRounds, AddRound, GetRounds, UpdateRound }