import React from 'react';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Profile from '../../Models/Profile';
import RoundsModel from "../../Models/RoundsModel";
import Round from "./Round";
import { Link } from 'react-router-dom';
import PlayerRoundsModel from '../../Models/PlayerRoundsModel';

const RoundList = observer((props) => {
    return RoundsModel.rounds.map(
        (round, index) => <Round {...round}  key={index} />)
})


const AddRound = (props) => {
    const rights = Profile.user.rights;
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
const DeleteRound = (props) => {
    const rights = Profile.user.rights;
    return (
        (rights) ?
            rights.some((right) => right.name_right === "delete_round") ?           
                    <button type='button' className="btn btn-gold-light" onClick={props.EnableDeleteMode}>
                        <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                        <span> Supprimer</span>
                    </button>
                : null
            : null
    )
}

const ReadModeRounds = observer((props) =>{
    PlayerRoundsModel.fetchRounds(Profile.user.id)
return (
    <section className="col-12 round p-5">
        <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
                <div className="action-round d-flex justify-content-end">
                    <AddRound />
                    <DeleteRound EnableDeleteMode={props.EnableDeleteMode} />
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
                        <RoundList/>
                    </tbody>
                </table>
            </div>
        </div>

    </section>
)})

const Rounds = (props) => {
   
    return (
        // inaccessible si n'est pas logué
        (!props.Profile.loggedIn) ?
            <Redirect to="/"></Redirect> :
            <ReadModeRounds />
    )

}
export default Rounds;