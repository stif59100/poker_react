import { useState } from "react";
import RoundsModel from "../../Models/RoundsModel";
const FormAddRounds = (props) => {
    const [date, setDate] = useState();
    const [name, setName] = useState();
    const [open, setOpen] = useState(false);
    const changeDate = (event) => {
        setDate(event.target.value)
    }

    const changeName = (event) => {
        setName(event.target.value)
    }

    const changeOpen = (event) => {
        setOpen(event.target.value)
    }
    const handleSubmitAddRound=(event)=>{
   
        event.preventDefault();  
        console.log(props)
           props.setAddMode(false);
        var round = { name:name, date:date ,open:open}
        RoundsModel.fetchAddRound(round);
    
    }

    return (
        <section className="col-12 round p-5">
            <div class="row ">
                <form class="col-12 col-lg-6 offset-lg-3 bg-grey-light" onSubmit={handleSubmitAddRound}>

                    <div className="form-group">
                        <label for="InputDate" className="color-gold-light">Date</label>
                        <input type="date" className="form-control input-grey-light" id="InputDate" aria-describedby="dateHelp" placeholder="Enter date" onChange={changeDate}/>
                        <small id="dateHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="InputName" className="color-gold-light">Name</label>
                        <input type="text" className="form-control input-grey-light" id="InputName" aria-describedby="nameHelp" placeholder="Enter name" onChange={changeName} />
                        <small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label color-gold-light"  for="checkOpen">Check is open register</label>
                        <input type="checkbox" className="form-check-input input-grey-light" id="checkOpen" value="false" onChange={changeOpen}/>
                    </div>
                    <button type="submit" className="btn btn-gold-light" >Submit</button>
            </form>
        </div>
        </section >
    )
}


/*
(!props.Profils.rights[""])?
<Redirect to="/errors/rights"/>
:*/
const AddRound = (props) => {

    return <FormAddRounds setAddMode={props.setAddMode}/>

}
export default AddRound;