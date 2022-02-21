import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PlayerRoundsModel from '../../Models/PlayerRoundsModel';
import RoundsModel from "../../Models/RoundsModel";


const RegisterOrUnRegister = (props) => {

    const rounds = PlayerRoundsModel.RoundByUser;
    return (
        (rounds) ?
            rounds.some(round => round.id_round === props.id_round) ?
                <UnRegister {...props} id_round={props.id_round} />
                : <Register {...props} id_round={props.id_round} />

            : null)
}


const Register = (props) => {
    const handleClickRegister = async (e) => {
        await PlayerRoundsModel.registerRound(props.id_round, props.Profile.user.id);
        await PlayerRoundsModel.fetchRounds(props.Profile.user.id)
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
        await PlayerRoundsModel.unRegisterRound(props.id_round, props.Profile.user.id);
        await PlayerRoundsModel.fetchRounds(props.Profile.user.id)
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
    const rights = props.Profile.user.rights;
    return (
    (rights.some((right) => right.name_right === "manage_round") ?           
    <Link to={{ pathname: `/RoundManagement/${props.id_round}` }}>
        <button type="button" className="btn btn-grey-light" >
            <FontAwesomeIcon icon={["fas", "registered"]} />
            <span>Gérer</span>
        </button>
    </Link>:
    null ))
}
const LaunchRound = (props) => {
    const rights = props.Profile.user.rights;
    return (
        (rights.some((right) => right.name_right === "launch_round") ?           
        <Link to={{ pathname: `/RoundManagement/${props.id_round}` }}>
            <button type="button" className="btn btn-grey-light" >
                <FontAwesomeIcon icon={["fas", "registered"]} />
                <span>Lancer</span>
            </button>
        </Link>
        :null
    ))
}
const Round = (props) => {
    const [DeleteRounds, setDeleteRounds] = useState([])

    const HandleClickCheckox = (event) => {
        var id_round = event.target.value;
        DeleteRounds.push(id_round);
        setDeleteRounds(DeleteRounds);
    }
    return (

        <tr >
            <td >
                <input className="form-check-input input-grey-light" type="checkbox" value={props.id_round} onClick={HandleClickCheckox} />
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