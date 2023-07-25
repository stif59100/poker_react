import Axios from "axios";
import BackEndRequest from '../Constantes/BackEndRequest';

const GetChampionShips = async (setChampionShips) => {
    return await Axios.get(BackEndRequest.GetChampionShips).then((result) => {
        setChampionShips(result.data);
    })
}
const AddChampionShipFn = async ( championShip) => {
    return await Axios.post(BackEndRequest.ChampionShipAdd,championShip).then((result) => {
    })
}
export {
    GetChampionShips,
    AddChampionShipFn
}