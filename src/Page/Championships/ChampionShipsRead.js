
import { Link } from 'react-router-dom';
import { HaveRight } from '../../Services/UserService';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import ChampionShips from './ChampionShips';
import { AddChampionShip, UpdateChampionShip, DeleteChampionShip } from '../../Constantes/Right';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChampionShipAddButton = () => {
    return (

        <div className="row">
            <div className='col-2 offset-10'>
                {(HaveRight(AddChampionShip) || false) ?
                    <Link to={{ pathname: `/ChampionShip/Add` }} ><button class="btn btn-grey-light">
                        <FontAwesomeIcon icon={["fa", "plus"]} />
                        <span>Ajouter</span>
                    </button></Link>
                    : null}
            </div>
        </div>)
}

const ChampionShipsRead = (props) => {
    return (
        (HaveRight(AddChampionShip) || HaveRight(UpdateChampionShip) || HaveRight(DeleteChampionShip) || true) ?
            <section className='col-12'>
                <ChampionShipAddButton />
                <div className="row">
                    <div className="col-10 offset-1 p-2">
                        <table className="table color-gold-light bg-grey-dark">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Date début</th>
                                    <th scope="col">Date fin</th>
                                    <th scope="col">Nombre de manches</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ChampionShips {...props} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            : <Redirect to="/"></Redirect>
    )
}

export default ChampionShipsRead;