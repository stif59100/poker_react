import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { toJS } from 'mobx';


import Profile from '../../Models/Profile';
import FormAddRound from "./FormAddRound";
import RoundsModel from "../../Models/RoundsModel";
import Round from "./Round";
import RoundManagement from "./RoundManagement";

const RoundList = observer((props) => {
    return RoundsModel.rounds.map(
        (round, index) => <Round {...round}  EnableManagementMode={props.EnableManagementMode} key={index} />)
});


const AddRound = observer((props) => {
    const rights = toJS(Profile.user.rights);
    return (
        (rights) ?
        rights.some((right) =>right.name_right === "add_round") ?
                    <button type='button' className="btn btn-gold-light"  onClick={props.EnableAddMode}>
                        <FontAwesomeIcon icon={['fa', 'plus']} />
                        <span> Ajouter</span>
                    </button>
                    : null
            : null
    )
})
const DeleteRound = observer((props) => {
    const rights = toJS(Profile.user.rights);
    return (
        (rights) ?
            rights.some((right) =>right.name_right === "delete_round") ?
                    <button type='button' className="btn btn-gold-light" onClick={props.EnableDeleteMode}>
                        <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                        <span> Supprimer</span>
                    </button>
                    : null
            : null
    )
})

const ReadModeRounds = (props) =>
    <section className="col-12 round p-5">
        <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
                <div className="action-round d-flex justify-content-end">
                    <AddRound EnableAddMode={props.EnableAddMode} />
                    <DeleteRound EnableDeleteMode={props.EnableDeleteMode}/>
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
                        <RoundList EnableManagementMode={props.EnableManagementMode}/>
                    </tbody>
                </table>
            </div>
        </div>

    </section>
const Rounds = (props) => {
    const [AddMode, setAddMode] = useState(false)
    const [DeleteMode, setDeleteMode] = useState(false)
    const [ManagementMode,setManagementMode] = useState(false)


    const EnableAddMode = (event) => {
        console.log("ENABLE ADD MODE")
        setAddMode(true);
    }
    const EnableDeleteMode = (event) => {
        console.log("ENABLE ADD MODE")
        setDeleteMode(true);
    }
    const EnableManagementMode = (event) => {
        console.log("ENABLE MANAGEMENT MODE")
        setManagementMode(true);
    }

    return (
        // inaccessible si n'est pas logué
        (!props.Profile.loggedIn) ?
            <Redirect to="/"></Redirect> :
            (AddMode) ?
                <FormAddRound setAddMode={setAddMode} />
                : (ManagementMode)?
                    <RoundManagement />                           
                :<ReadModeRounds EnableAddMode={EnableAddMode} EnableDeleteMode={EnableDeleteMode} EnableManagementMode={EnableManagementMode} />


    )

}




export default Rounds;