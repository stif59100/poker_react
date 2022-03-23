import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import RoundsModel from "../../Models/RoundsModel";
import Round from "./Round";
import { Link } from 'react-router-dom';
import PlayerRoundsModel from '../../Models/PlayerRoundsModel';
import Rights from '../../Models/Rights';


// boucle sur l'ensemble des tournois afin de les afficher individuellement par ligne 
const RoundList = observer((props) => {

    return RoundsModel.rounds.map(
        (round, index) => <Round {...round} {...props} key={index} handleCheckDelete={props.handleCheckDelete} />)
})


// bouton pour ajouter un tournois si le droit add_round est actif
const AddRound = (props) => {
    return (
        (props.rights && props.rights.length > 0) ?
        props.rights.some((right) => right.name_right === "add_round") ?
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
    return (
        (props.rights && props.rights.length > 0) ?
        props.rights.some((right) => right.name_right === "delete_round") ?

                <button type='button' className="btn btn-gold-light" onClick={props.handleDelete}>

                    <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                    <span> Supprimer</span>
                </button>

                : null
            : null
    )
}

// template pour affiche la liste et les options ajout et de suppression
const ReadModeRounds = observer((props) => {
    const [arrayIdDelete, setArrayDelete] = useState([]);
    const [rights,setRights] = useState();

    useEffect(async ()=>{
        setRights(Rights.rights);
    });

    const handleDelete = () => {
        RoundsModel.fetchdeleteRounds(arrayIdDelete);
        RoundsModel.fetchGetRounds();
    }

    const handleCheckDelete = (event) => {
         // création tableau provisoire pour récupérer l'id du round sélectionné
        let arrayId = arrayIdDelete
        // boucle permettant de vérifier la présence de l'élément dans le tableau 
        let idExist = arrayId.some((element) => {
           return element === event.target.value
        })
        // on ajoute la valeur du round sélectionné
        if (event.target.checked){
        if (!idExist) {
            arrayId.push(event.target.value)
        }
    }else{
            let index = arrayId.indexOf(event.target.value)
            arrayId.splice(index, 1)
        }
        // on affecte la valeur du nouveau tableau présent dans le state
        setArrayDelete(arrayId)
    }
    return (
        <section className="col-12 round p-5">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1">
                    <div className="action-round d-flex justify-content-end">
                        <AddRound {...props} rights={rights}/>
                        <DeleteRound {...props} handleDelete={handleDelete} rights={rights} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1 table-responsive">
                    <table className='table bg-grey-dark'>
                        <caption className="color-gold-light">Liste des tournois</caption>
                        <thead>
                            <tr>
                                <th scope="col">
                                    <span className='color-gold-light'>Select</span>
                                </th>
                                <th scope="col">
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
                            <RoundList {...props} handleCheckDelete={handleCheckDelete} rights={rights}/>
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    )
})


// affiche la liste des tournois si l'utilisateur est loggé
// sinon redirige sur la page d'accueil
const Rounds = (props) => {
    return (
        // inaccessible si n'est pas logué
        (!props.Profile.loggedIn) ?
            <Redirect to="/"></Redirect> :
            <ReadModeRounds {...props} />
    )

}
export default Rounds;