import { useEffect, useState, useCallback } from "react";
import { GetRightsByUser, GetRights } from '../../Services/RigthService'
import { GetUserById } from "../../Services/UserService";
import { useParams } from 'react-router-dom'

const RightChecked = (props) => {
    const HandleCheck = (event) => {
        const currentRightsSelected = props.rightsSelected;
        const right = props.rights.find((right) => {
            return right === event.target.value
        });
        if (event.target.checked) {
            currentRightsSelected.push(right);
        } else {
            let index = props.rights.indexOf(right);
            currentRightsSelected.splice(index, 1);
        }
        props.setRightsSelected(currentRightsSelected);
    }
    // useEffect(() => {
    //     const checked = props.rightsSelected.some((rightSelected) => {
    //         return rightSelected.id === props.right.id
    //     })
    //     setIsChecked(checked);
    // }, [props.right.id, props.rightsSelected])

    return (
        (
            <input onChange={HandleCheck} type="checkbox" id={props.right.name} value={props.right.name} checked={props.checked}></input>
        )
    )
}

const EditRights = (props) => {
    return (
        props.rights.map((right, index) => {
            let isChecked = false;
            if (typeof props?.user?.rights !== "undefined") {
                isChecked = props.user.rights.some(userRight => userRight.rightId === right.id);
            }
            return (
                <div className="form-group" key={index} >
                    <RightChecked {...props} right={right} isChecked={isChecked}></RightChecked> 
                    <label forHtml={right.name}>{right.name} </label>
                </div>
            )
        })
    )
}

// page permettant l'edition du profil
const UserEdit = (props) => {
    const [rights, setRights] = useState([]);
    const params = useParams();
    const [user, setUser] = useState()
    const [pseudo, setPseudo] = useState()
    const [lastName, setLastName] = useState()
    const [firstname, setFirstName] = useState()
    const [email, setEmail] = useState();
    const [userId] = useState(params.id)

    useEffect(() => {

        if (!user) {
            GetRights(setRights)
            GetUserById(userId, setUser)
        }
    }, [userId, user])


    const HandleSave = () => {
        const user = {
            lastName,
            firstname,
            pseudo,
            email,
        }
        setUser(user);
    }

    const HandleLastName = (event) => {
        setLastName(event.target.value)
    }
    const HandleFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const HandlePseudo = (event) => {
        setPseudo(event.target.value)
    }
    const HandleEmail = (event) => {
        setEmail(event.target.value)
    }
    return (
        <section className="col-12 Profile" >
            <div className="container bootstrap snippets bootdey color-gold-light">
                <div className="panel-body inf-content">
                    <div className="row">
                        <div className="col-md-4">
                            <img alt="" title="" className="rounded-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario" />
                        </div>
                        <div className="col-md-6 bg-grey-dark m-2">
                            <div className="row">
                                <div className="d-flex justify-content-end m-2">
                                    <button className="btn-gold-light" onClick={HandleSave} >Sauvegarder</button>
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
                                                    {(!user) ? null :
                                                        <input type="text" value={user.firstName} onChange={HandleLastName}></input>}
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
                                                    {(!user) ? null : <input type="text" value={user.lastName} onChange={HandleFirstName}></input>}
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
                                                    {(!user) ? null :
                                                        <input type="text" value={user.pseudo} onChange={HandlePseudo}></input>}
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
                                                    <EditRights rights={rights} user={user} {...props} ></EditRights>
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
                                                    {(!user) ? null :
                                                        <input type="text" value={user.email} onChange={HandleEmail}></input>}
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
export default UserEdit;
