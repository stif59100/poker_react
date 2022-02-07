import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toJS } from 'mobx';

import PlayerRoundsModel from '../../Models/PlayerRoundsModel';
import Profile from '../../Models/Profile';
import RoundsModel from "../../Models/RoundsModel";

const RegisterOrUnRegister = observer((props) => {
    const rounds = toJS(Profile.user.rounds);
    return (
        (rounds) ?
            rounds.some(round => round.id_round === props.id_round) ?
                <UnRegister id_round={props.id_round} />
                : <Register id_round={props.id_round} />

            : null)
})


const Register = observer((props) => {
    const handleClickRegister = (e) => {
        console.log("Register");
        PlayerRoundsModel.registerRound(props.id_round, Profile.user.id);
    }
    return (
        <button type="button" className="btn btn-grey-light" onClick={handleClickRegister}>
            <FontAwesomeIcon icon={["fas", "registered"]} />
            <span>S'inscrire</span>
        </button>
    )
})

const UnRegister = (props) => {

    const handleClickUnRegister = (e) => {
        console.log("UnRegister");
        PlayerRoundsModel.unRegisterRound(props.id_round, Profile.user.id);
    }
    return (
        <button type="button" className="btn btn-grey-light" onClick={handleClickUnRegister}>
            <FontAwesomeIcon icon={["fas", "registered"]} />
            <span>Se desincrire</span>
        </button>
    )
}
const Round = ({ id_round, date_round, hour_round, name_round, EnableManagementMode }) => {
    
     const [selection, setSelection] = useState([]);

    const HandleClickCheckox = (event) => {
        var lastValue = selection;
        console.log(event)
        lastValue.push(event.target.value);
        setSelection(lastValue)
    }
    
    return (
        
        <tr >
            <td >
                <input className="form-check-input input-grey-light" type="checkbox" value={id_round} onClick={HandleClickCheckox} />
            </td>
            <td className="select-round col">
                <label className="text-gold-light">{date_round}</label>
            </td>
            <td className="select-round col">
                <label className="text-gold-light">{hour_round}</label>
            </td>
            <td className="name-round col">
                <label className='color-gold-light'>{name_round}</label>
            </td>
            <td className="actions-round col">
                <RegisterOrUnRegister id_round={id_round} />

                <button type="button" className="btn btn-grey-light" onClick={EnableManagementMode}>
                    <FontAwesomeIcon icon={["fas", "registered"]} />
                    <span>Gérer</span>
                </button>
            </td>
        </tr>
    )
}
export default Round;