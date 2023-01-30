import { useState } from "react";
import { AddRound } from "../../Services/RoundsService";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { AddRoundRight } from '../../Constantes/Right';
import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import { HaveRight } from "../../Services/UserService"

// forumilaire d'ajout d'un tournois avec ces paramtres de configurations qui le caracterise.
const FormAddRound = (props) => {
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [name, setName] = useState();
    const [open, setOpen] = useState(false);
    const [points_attributs, setPointAttributs] = useState(1);
    const [maxPlayer, setMaxPlayer] = useState(1);
    const [buyIn, setBuyIn] = useState(1);
    const [rake, setRake] = useState(1);
    const [stack, setStack] = useState(1);
    const [addon, setAddon] = useState(1);
    const [rebuy, setRebuy] = useState(1);
    const [bounty, setBounty] = useState(1);
    const [addSuccess, setAddSuccess] = useState(false)

    // evenement sur le changement de la date du tournois
    const changeDate = (event) => {
        setDate(event.target.value)
    }

    // evenement sur le changement de la heure du tournois
    const changeHour = (event) => {
        setHour(event.target.value)
    }
    // evenement sur le changement du nom du tournois
    const changeName = (event) => {
        setName(event.target.value)
    }
    // evenement sur le changement du status ouvert ou fermé (inscription possible ou non) du tournois
    const changeOpen = (event) => {
        setOpen(event.target.value)
    }
    // evenement sur l'affectation des points à attribuer au demarrage du tournois
    const changePointAttributs = (event) => {
        setPointAttributs(event.target.value)
    }
    // evenement sur le nombre de joueur maximun lors tournois
    const changeMaxPlayer = (event) => {
        setMaxPlayer(event.target.value)
    }
    const changeBuyIn = (event) => {
        setBuyIn(event.target.value)
    }
    const changeRake = (event) => {
        setRake(event.target.value)
    }
    const changeStack = (event) => {
        setStack(event.target.value)
    }
    const changeAddon = (event) => {
        setAddon(event.target.value)
    }
    const changeRebuy = (event) => {
        setRebuy(event.target.value)
    }
    const changeBounty = (event) => {
        setBounty(event.target.value)
    }
    // evenement sur le bouton d'envoie du formulaire
    const handleSubmitAddRound = (event) => {

        event.preventDefault();
        console.log(props)
        var round = {
            name: name,
            date: date,
            hour: hour,
            open: open,
            points_attributs: points_attributs,
            maxPlayer: maxPlayer,
            buyIn: buyIn,
            rake: rake,
            stack: stack,
            addon: addon,
            rebuy: rebuy,
            bounty: bounty
        }
        AddRound(round);
        setAddSuccess(true)

    }

    return (
        (HaveRight(AddRoundRight)) ?
            <Redirect to="/errors/rights" />
            :
            (addSuccess) ?
                <Redirect to="/Rounds" /> :
                <section className="col-12 round p-5">

                    <div class="row ">
                        <form class="col-12 col-lg-6 offset-lg-3 bg-grey-light" onSubmit={handleSubmitAddRound}>

                            <div className="form-group">
                                <label for="InputDate" className="color-gold-light">Date</label>
                                <input type="date" className="form-control input-grey-light" id="InputDate" aria-describedby="dateHelp" placeholder="Enter date" onChange={changeDate} />
                                <label for="InputHour" className="color-gold-light">Heure</label>
                                <input type="time" className="form-control input-grey-light" id="InputHour" aria-describedby="HourHelp" placeholder="Enter Time" onChange={changeHour} />

                            </div>

                            <div className="form-group">
                                <label for="InputName" className="color-gold-light">Nom de la partie</label>
                                <input type="text" className="form-control input-grey-light" id="InputName" aria-describedby="nameHelp" placeholder="Intitulé de la partie" onChange={changeName} value={name} />


                            </div>
                            <div className="form-group">
                                <label for="InputPoint" className="color-gold-light">Nombre de points</label>
                                <input type="number" className="form-control input-grey-light" id="InputPoint" aria-describedby="nameHelp" placeholder="Entrez le nombre de points attribués" onChange={changePointAttributs} value={points_attributs} />
                            </div>
                            <div className="form-group">
                                <label for="InputPlayer" className="color-gold-light">Nombre de joueurs</label>
                                <input type="number" className="form-control input-grey-light" id="InputPlayer" aria-describedby="nameHelp" placeholder="Entrez le nombre de joueurs maximum" onChange={changeMaxPlayer} value={maxPlayer} />
                            </div>
                            <div className="form-group">
                                <label for="InputBuyIn" className="color-gold-light">Buy-in</label>
                                <input type="number" className="form-control input-grey-light" id="InputBuyIn" aria-describedby="nameHelp" placeholder="Montant de la partie" onChange={changeBuyIn} value={buyIn} />
                            </div>
                            <div className="form-group">
                                <label for="InputRake" className="color-gold-light">Rake</label>
                                <input type="number" className="form-control input-grey-light" id="InputRake" aria-describedby="nameHelp" placeholder="Montant du rake" onChange={changeRake} value={rake} />
                            </div>
                            <div className="form-group">
                                <label for="InputStack" className="color-gold-light">Stack</label>
                                <input type="number" className="form-control input-grey-light" id="InputStack" aria-describedby="nameHelp" placeholder="Saisissez le nombre de jetons par joueur" onChange={changeStack} value={stack} />
                            </div>
                            <div className="form-group">
                                <label for="InputAddon" className="color-gold-light">Addon</label>
                                <input type="number" className="form-control input-grey-light" id="InputAddon" aria-describedby="nameHelp" placeholder="Saisissez le montant de l'addon ou rebuy" onChange={changeAddon} value={rebuy} />
                            </div>
                            <div className="form-group">
                                <label for="InputRebuy" className="color-gold-light">Rebuy</label>
                                <input type="number" className="form-control input-grey-light" id="InputAddon" aria-describedby="nameHelp" placeholder="Saisissez le montant du rebuy" onChange={changeRebuy} value={addon} />
                            </div>
                            <div className="form-group">
                                <label for="InputBounty" className="color-gold-light">Bounty</label>
                                <input type="number" className="form-control input-grey-light" id="InputBounty" aria-describedby="nameHelp" placeholder="Saisissez le montant du bounty" onChange={changeBounty} value={bounty} />
                            </div>
                            <div className="form-check">
                                <label className="form-check-label color-gold-light" for="checkOpen">Check is open register</label>
                                <input type="checkbox" className="form-check-input input-grey-light" id="checkOpen" value="false" onChange={changeOpen} />
                            </div>
                            <button type="submit" className="btn btn-gold-light" >Submit</button>
                        </form>
                    </div>
                </section >
    )
}

export default FormAddRound;

