import { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import {  UpdateChampionShip, DeleteChampionShip } from '../../Constantes/Right';
import ChampionShipContext from '../../Context/ChampionShipsContext';
import { GetChampionShips } from '../../Services/ChampionShipService';
import { HaveRight } from '../../Services/UserService';

const ChampionShips = ((props) => {
    const { championShips, setChampionShips } = useContext(ChampionShipContext);
    useEffect(() => GetChampionShips(setChampionShips), [setChampionShips])
    return (
        championShips.map((championShip, index) => {
            return (
                <tr key={index}>
                    <td>{championShip.Name}</td>
                    <td>{championShip.DateBegin}</td>
                    <td>{championShip.DateEnd}</td>
                    <td>{championShip.nbManche}</td>
                    <td>
                        <Link to={{ pathname: `/ChampionShipDetail/${championShip.Id}` }} >
                        <button class="btn btn-grey-light">
                            <FontAwesomeIcon icon={["fa", "info"]} />
                            <span>Details</span>
                            </button>
                        </Link>
                        <ChampionShipEditButton championShip={championShip} ></ChampionShipEditButton>
                        <ChampionShipDeleteButton championShip={championShip} ></ChampionShipDeleteButton>
                    </td>
                </tr>
            )
        })
    )
});

const ChampionShipDeleteButton = () => {
    return ((HaveRight(DeleteChampionShip)) ?
        <button class="btn btn-grey-light">
            <FontAwesomeIcon icon={["fa", "trash"]} size="1x" />
            <span>Supprimer</span>
        </button>
        : null)
}
const ChampionShipEditButton = ({ championShip }) => {
    return ((HaveRight(UpdateChampionShip)) ?
        <Link to={{ pathname: `/ChampionShipDetail/${championShip.Id}` }} ><button class="btn btn-grey-light">
            <FontAwesomeIcon icon={["fa", "pen"]} />
            <span>Editer</span>
        </button></Link>
        : null)
}
export default ChampionShips;