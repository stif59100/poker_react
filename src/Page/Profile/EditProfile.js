import { useContext } from "react";
import  UserContext  from '../../Context/UserContext';


// page permettant l'edition du profil
const EditProfile = (props) => {
    const user = useContext(UserContext)
    return (
        <section classNameName="col-12 Profile" >
            <div className="container bootstrap snippets bootdey color-gold-light">
                <div className="panel-body inf-content">
                    <div className="row">
                        <div className="col-md-4">
                            <img alt="" title="" className="rounded-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario" />
                        </div>
                        <div className="col-md-6 bg-grey-dark m-2">
                            <div className="row">
                                <div className="d-flex justify-content-end m-2">
                                    <button className="btn-gold-light" onClick={props.HandleEditMode} >Sauvegarder</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <strong>Information</strong>
                                </div>
                            </div>
                            <div className="row">
                                <div className="table-responsive">
                                    <table className="table table-user-information color-gold-light">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span className="glyphicon glyphicon-user  "></span>
                                                        Nom
                                                    </strong>
                                                </td>
                                                <td className="">
                                                    <input type="text" value={user.lastName}></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span className="glyphicon glyphicon-cloud "></span>
                                                        Prénom
                                                    </strong>
                                                </td>
                                                <td className="">
                                                    <input type="text" value={user.firstName}></input>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span className="glyphicon glyphicon-bookmark "></span>
                                                        Username
                                                    </strong>
                                                </td>
                                                <td className="">
                                                    <input type="text" value={user.pseudo}></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span className="glyphicon glyphicon-eye-open "></span>
                                                        Role
                                                    </strong>
                                                </td>
                                                <td className="">
                                                    Admin
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span className="glyphicon glyphicon-envelope "></span>
                                                        Email
                                                    </strong>
                                                </td>
                                                <td className="">
                                                    <input type="text" value={user.email}></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span className="glyphicon glyphicon-calendar "></span>
                                                        created
                                                    </strong>
                                                </td>
                                                <td className="">
                                                    20 jul 20014
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span className="glyphicon glyphicon-calendar "></span>
                                                        Modified
                                                    </strong>
                                                </td>
                                                <td className="">
                                                    20 jul 20014 20:00:00
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default EditProfile;
