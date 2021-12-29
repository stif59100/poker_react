import React, { useState } from 'react';
import { useEffect, useRef } from "react";
import PlayerRoundsModel from '../../Models/PlayerRoundsModel';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import AddRound from "./AddRounds";
import RoundsModel from "../../Models/RoundsModel";
import { fontAwesome } from 'fontawesome';



const Round = ({id_round, date_round, name_round }) => {
   const handleClickRegister = () =>{

   }
    return (
        <tr >
            <td >
                <input className="form-check-input input-grey-light" type="checkbox" value={id_round} aria-label="..."  />
            </td>
            <td class="selcect-round col">
                <label className="text-gold-light">{date_round}</label>
            </td>
            <td class="name-round col">
                <label className='color-gold-light'>{name_round}</label>
            </td>
            <td class="actions-round col">
                <button type="button" class="btn btn-grey-light" onClick={handleClickRegister}>
                    <FontAwesomeIcon icon={["fas","registered"]}/>
                    <span>Register</span>
                    </button>
            </td>
        </tr>
    )
}
const RoundList = observer(() =>{ 
    
    console.log(RoundsModel.rounds);
    return RoundsModel.rounds.map(
    (round, index) => <Round {...round} key={index} />)
});

const ReadModeRounds = (props) =>
    <section className="col-12 round p-5">
        <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
                <div className="action-round d-flex justify-content-end">
                    <button type='button' className="btn btn-gold-light" onClick={props.EnableAddMode}>
                        <FontAwesomeIcon icon={['fa','plus']}/>
                        <span> Ajouter</span>
                        </button>
                    <button type='button' className="btn btn-gold-light" onClick={props.EnableDeleteMode}>
                        <FontAwesomeIcon icon={['fas','trash-alt']}/> 
                        <span>Supprimer</span>
                    </button>
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
                                <span className='color-gold-light'>name</span>
                            </th>
                            <th scope="col">
                                <span className='color-gold-light'>action</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <RoundList />
                    </tbody>
                </table>
            </div>
        </div>

    </section>
const Rounds = (props) => {
    const [AddMode, setAddMode] = useState(false)
    const [DeleteMode, setDeleteMode] = useState(false)

    const EnableAddMode = (event) => {
        console.log("ENABLE ADD MODE")
        setAddMode(true);
    }
    const EnableDeleteMode = (event) => {
        console.log("ENABLE ADD MODE")
        setDeleteMode(true);
    }


    return (
        // inaccessible si n'est pas logué
        (!props.Profile.loggedIn) ?
            <Redirect to="/"></Redirect> :
            (AddMode) ?
                <AddRound  setAddMode={setAddMode}/>
                : <ReadModeRounds EnableAddMode={EnableAddMode} EnableDeleteMode={EnableDeleteMode} />

    )

}
export default Rounds;