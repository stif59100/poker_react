import React from 'react';
import Register from "./Register";
import UnRegister from "./UnRegister";
import ManageRound from "./ManageRound";
import LaunchRound from "./LaunchRound";

const RegisterOrUnRegister = (props) => {
    return (
        ((!props.roundsRegisterUser || props.roundsRegisterUser.length !== 0)?
        (props.roundsRegisterUser.some(round => round.id_round == props.id_round) ?
                <UnRegister {...props} id_round={props.id_round} />
                : <Register {...props} id_round={props.id_round} />)
            : <Register {...props} id_round={props.id_round} />)
    )
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
                <RegisterOrUnRegister {...props} id_round={props.id_round}  />
                <ManageRound {...props} id_round={props.id_round} ></ManageRound>
                <LaunchRound {...props} id_round={props.id_round} ></LaunchRound>
            </td>
        </tr>
    )
}
export default Round;