import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PlayerRoundsModel from '../../Models/PlayerRoundsModel';
import RoundsModel from "../../Models/RoundsModel";


const RegisterOrUnRegister = (props) => {
    const [rounds] = useState(PlayerRoundsModel.RoundByUser);
    console.log(rounds)
    return (
        (rounds) ?
            rounds.some(round => round.id_round === props.id_round) ?
                <UnRegister {...props} id_round={props.id_round} />
                : <Register {...props} id_round={props.id_round} />

            : null)
}


const Register = (props) => {
    const handleClickRegister = async (e) => {
        await PlayerRoundsModel.registerRound(props.id_round, props.Profile.id);
        await PlayerRoundsModel.fetchRounds(props.Profile.id)
        await RoundsModel.fetchGetRounds()
    }
    return (
        <button type="button" className="btn btn-grey-light" onClick={handleClickRegister} href="/Rounds">
            <FontAwesomeIcon icon={["fas", "registered"]} />
            <span>S'inscrire</span>
        </button>
    )
}

const UnRegister = (props) => {

    const handleClickUnRegister = async (e) => {
        await PlayerRoundsModel.unRegisterRound(props.id_round, props.Profile.id);
        await PlayerRoundsModel.fetchRounds(props.Profile.id)
        await RoundsModel.fetchGetRounds()
    }

    return (
        <button type="button" className="btn btn-grey-light" onClick={handleClickUnRegister}>
            <FontAwesomeIcon icon={["fas", "registered"]} />
            <span>Se desincrire</span>
        </button>
    )
}


const ManageRound = (props) => {
    console.log(props)
    return (
    (props.rights && props.rights.length > 0)?
    (props.rights.some((right) => right.name_right === "manage_round") ?           
    <Link to={{ pathname: `/RoundManagement/${props.id_round}` }}>
        <button type="button" className="btn btn-grey-light" >
            <FontAwesomeIcon icon={["fas", "registered"]} />
            <span>Gérer</span>
        </button>
    </Link>:
    null )
    :null)
}
const LaunchRound = (props) => {
    return (
        (props.rights && props.rights.length > 0)?
        (props.rights.some((right) => right.name_right === "launch_round") ?           
        <Link to={{ pathname: `/RoundManagement/${props.id_round}` }}>
            <button type="button" className="btn btn-grey-light" >
                <FontAwesomeIcon icon={["fas", "registered"]} />
                <span>Lancer</span>
            </button>
        </Link>
        :null
       
    ) :null)
}
const Round = (props) => {

    return (
        <tr >
            <td >
                <input className="form-check-input input-grey-light" type="checkbox" value={props.id_round} onClick={props.handleCheckDelete} />
            </td>
            <td className="select-round col">
                <label className="text-gold-light">{props.date_round}</label>
            </td>
            <td className="select-round col">
                <label className="text-gold-light">{props.hour_round}</label>
            </td>
            <td className="name-round col">
                <label className='color-gold-light'>{props.name_round}</label>
            </td>
            <td className="actions-round col">
                <RegisterOrUnRegister {...props}  id_round={props.id_round} />
                <ManageRound {...props} id_round={props.id_round} ></ManageRound>
                <LaunchRound {...props}  id_round={props.id_round} ></LaunchRound>
            </td>
        </tr>
    )
}
export default Round;