import React from 'react';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import RoundsModel from "../../Models/RoundsModel";
import Round from "./Round";
import { Link } from 'react-router-dom';
import PlayerRoundsModel from '../../Models/PlayerRoundsModel';

// boucle sur l'ensemble des tournois afin de les afficher individuellement par ligne 
const RoundList = observer((props) => {
    return RoundsModel.rounds.map(
        (round, index) => <Round {...round} {...props}  key={index} />)
})


// bouton pour ajouter un tournois si le droit add_round est actif
const AddRound = (props) => {
    const rights = props.Profile.user.rights;
    return (
        (rights) ?
            rights.some((right) => right.name_right === "add_round") ?
            <Link to="/Round/Add">
                 <button type='button' className="btn btn-gold-light" onClick={props.EnableAddMode}>
                    <FontAwesomeIcon icon={['fa', 'plus']} />
                    <span> Ajouter</span>
                </button>
                </Link>
                : null
            : null
    )
}
// bouton pour supprimer un tournois si le droit delete tournois est actif
const DeleteRound = (props) => {
    const rights =  props.Profile.user.rights;
    return (
        (rights) ?
            rights.some((right) => right.name_right === "delete_round") ?           
            <Link to="/Round/Delete">
                    <button type='button' className="btn btn-gold-light" onClick={props.EnableDeleteMode}>
                        <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                        <span> Supprimer</span>
                    </button>
                    </Link>
                : null
            : null
    )
}

// template pour affiche la lister et les options ajout et de suppression
const ReadModeRounds = observer((props) =>{
    PlayerRoundsModel.fetchRounds(props.Profile.user.id)
return (
    <section className="col-12 round p-5">
        <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
                <div className="action-round d-flex justify-content-end">
                    <AddRound {...props} />
                    <DeleteRound {...props}  EnableDeleteMode={props.EnableDeleteMode} />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1 table-responsive">
                <table className='table bg-grey-dark'>
                    <caption className="color-gold-light">List of rounds</caption>
                    <thead>
                        <tr>
                            <th scope="col">
                                <span className='color-gold-light'>Select</span>
                            </th>
                            <th scope="col">
                                <FontAwesomeIcon icon={["far", "calendar"]}></FontAwesomeIcon>
                                <span className='color-gold-light'>Date</span>
                            </th>
                            <th scope="col">
                                <span className='color-gold-light'>Heure</span>
                            </th>
                            <th scope="col">
                                <span className='color-gold-light'>name</span>
                            </th>
                            <th scope="col">
                                <span className='color-gold-light'>action</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <RoundList {...props} />
                    </tbody>
                </table>
            </div>
        </div>

    </section>
)})


// affiche la liste des tournois si l'utilisateur est loggé
// sinon redirige sur la page d'accueil
const Rounds = (props) => {
    return (
        // inaccessible si n'est pas logué
        (!props.Profile.loggedIn) ?
            <Redirect to="/"></Redirect> :
            <ReadModeRounds {...props}  />
    )

}
export default Rounds;