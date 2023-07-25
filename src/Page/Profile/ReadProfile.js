import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import UserContext from '../../Context/UserContext';
import RigthsReadMode from "./Rigths"

const ReadProfile = () => {
    const { user } = useContext(UserContext)
    console.log(user)
    const [rigths] = useState(user.rights)
    return (
        <section>
            <div className="container bootstrap snippets bootdey color-gold-light">
                <div className="panel-body inf-content">
                    <div className="row">
                        <div className="col-md-4">
                            <img alt="" title="" className="rounded-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario" />
                        </div>
                        <div className="col-md-6 bg-grey-dark m-2">
                            <div className="row">
                                <div className="d-flex justify-content-end m-2">
                                    <Link to="/Profile/Edit">
                                        <button className="btn-gold-light" >Editer</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <strong>Informations</strong>
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
                                                    {user.lastName}
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
                                                    {user.firstName}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span className="glyphicon glyphicon-bookmark "></span>
                                                        Pseudo
                                                    </strong>
                                                </td>
                                                <td className="">
                                                    {user.pseudo}

                                                </td>
                                            </tr>


                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span className="glyphicon glyphicon-eye-open "></span>
                                                        Droits
                                                    </strong>
                                                </td>
                                                <td className="">
                                                   <RigthsReadMode rigths={rigths}></RigthsReadMode>
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
                                                    {user.email}
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

export default ReadProfile;