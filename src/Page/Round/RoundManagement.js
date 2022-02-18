import PlayerRoundsModel from "../../Models/PlayerRoundsModel";
import { useLocation,useParams } from 'react-router-dom'


const UserRound = ({name_user}) => {
    return (

        <tr>
            <td>{name_user}</td>
            <td>{name_user}</td>
            <td>{name_user}</td>
        </tr>
    )
}


const UsersRegisterRound = (props) => {
   // console.log(PlayerRoundsModel.fetchUsers())
   let rounds = PlayerRoundsModel.fetchUsers(props.Id_Round).then((data)=>{return data});
   console.log(rounds)
  return  null //rounds.map((user, key) => <UserRound {...user} key={key} />)
     
}


    //return null


const RoundManagement = (props) => {
  const params = useParams()
  console.log(params)
    return (

        < div className="col-12 p-5">

            <div className="row">
                <div className="col-12">
                    <h1>Informations</h1>
                    <label>Nom de la manche</label>
                    <label>Date</label>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1>Joueurs inscrits</h1>

                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Nom</th>
                                <th scope="col">Prénom</th>
                                <th scope="col">Pseudo</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <UsersRegisterRound Id_Round={params.id} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}
export default RoundManagement;