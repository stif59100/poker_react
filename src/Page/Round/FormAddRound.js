import { point } from "leaflet";
import { useState } from "react";
import RoundsModel from "../../Models/RoundsModel";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


// forumilaire d'ajout d'un tournois avec ces paramtres de configurations qui le caracterise.
const FormAddRound = (props) => {
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [name, setName] = useState();
    const [open, setOpen] = useState(false);
    const [points_attributs, setPointAttributs] = useState();
    const [maxPlayer, setMaxPlayer] = useState();
    const [buyIn, setBuyIn] = useState();
    const [rake, setRake] = useState();
    const [stack, setStack] = useState();
    const [addon, setAddon] = useState();
    const [rebuy, setRebuy] = useState();
    const [bounty, setBounty] = useState();
    
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
    const changeStack= (event) => {
        setStack(event.target.value)
    }
    const changeAddon= (event) => {
        setAddon(event.target.value)
    }
    const changeRebuy= (event) => {
        setRebuy(event.target.value)
    }
    const changeBounty= (event) => {
        setBounty(event.target.value)
    }
    // evenement sur le bouton d'envoie du formulaire
    const handleSubmitAddRound = (event) => {

        event.preventDefault();
        console.log(props)
        props.setAddMode(false);
        var round = { name: name, date: date,hour: hour, open: open, points_attributs: points_attributs, maxPlayer: maxPlayer,buyIn: buyIn, rake: rake,stack:stack, addon: addon, rebuy:rebuy, bounty: bounty }
        RoundsModel.fetchAddRound(round);

    }

    return (      
            (!props.Profils.rights.some((right)=>right.name === "add_round"))?
            <Redirect to="/errors/rights"/>
            :<section className="col-12 round p-5">
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
                        <input type="text" className="form-control input-grey-light" id="InputName" aria-describedby="nameHelp" placeholder="Intitulé de la partie" onChange={changeName} />

                        
                    </div>
                    <div className="form-group">
                        <label for="InputPoint" className="color-gold-light">Nombre de points</label>
                        <input type="number" className="form-control input-grey-light" id="InputPoint" aria-describedby="nameHelp" placeholder="Entrez le nombre de points attribués" onChange={changePointAttributs} />
                    </div>
                    <div className="form-group">
                        <label for="InputPlayer" className="color-gold-light">Nombre de joueurs</label>
                        <input type="number" className="form-control input-grey-light" id="InputPlayer" aria-describedby="nameHelp" placeholder="Entrez le nombre de joueurs maximum" onChange={changeMaxPlayer} />
                    </div>
                    <div className="form-group">
                        <label for="InputBuyIn" className="color-gold-light">Buy-in</label>
                        <input type="number" className="form-control input-grey-light" id="InputBuyIn" aria-describedby="nameHelp" placeholder="Montant de la partie" onChange={changeBuyIn} />
                    </div>
                    <div className="form-group">
                        <label for="InputRake" className="color-gold-light">Rake</label>
                        <input type="number" className="form-control input-grey-light" id="InputRake" aria-describedby="nameHelp" placeholder="Montant du rake" onChange={changeRake} />
                    </div>
                    <div className="form-group">
                        <label for="InputStack" className="color-gold-light">Stack</label>
                        <input type="number" className="form-control input-grey-light" id="InputStack" aria-describedby="nameHelp" placeholder="Saisissez le nombre de jetons par joueur" onChange={changeStack} />
                    </div>
                    <div className="form-group">
                        <label for="InputAddon" className="color-gold-light">Addon</label>
                        <input type="number" className="form-control input-grey-light" id="InputAddon" aria-describedby="nameHelp" placeholder="Saisissez le montant de l'addon ou rebuy" onChange={changeAddon} />
                    </div>
                    <div className="form-group">
                        <label for="InputRebuy" className="color-gold-light">Rebuy</label>
                        <input type="number" className="form-control input-grey-light" id="InputAddon" aria-describedby="nameHelp" placeholder="Saisissez le montant du rebuy" onChange={changeRebuy} />
                    </div>
                    <div className="form-group">
                        <label for="InputBounty" className="color-gold-light">Bounty</label>
                        <input type="number" className="form-control input-grey-light" id="InputBounty" aria-describedby="nameHelp" placeholder="Saisissez le montant du bounty" onChange={changeBounty} />
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

