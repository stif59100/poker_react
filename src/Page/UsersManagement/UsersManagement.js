import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { GetUsers } from "../../Services/UserService";

const ListUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => GetUsers(setUsers), []);
    return (
        users.map((user, index) => {
            return (
                <tr>
                    <td>
                        <FontAwesomeIcon icon={["fa", "user"]} />
                    </td>
                    <td>{user.firstName}</td>
                    <td>{user.pseudo}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-grey-light">
                            <FontAwesomeIcon icon={["fa", "trash"]} size="1x" />
                            <span>Supprimer</span>
                        </button>
                        <Link to={{ pathname: `/UserEdit/${user.id}` }} >
                            <button className="btn btn-grey-light">
                                <FontAwesomeIcon icon={["fa", "pen"]} />
                                <span>Editer</span>
                            </button></Link></td>
                </tr>
            )
        })
    )
}
const UsersManagement = () => {
    return (
        <section className="row" >
            <div className="col-12 col-lg-6 offset-lg-3 p-2">
                <table className='table bg-grey-dark color-gold-light'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nom</th>
                            <th>Pseudo</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ListUsers></ListUsers>
                    </tbody>
                </table>
            </div>
        </section>
    )
}


export default UsersManagement;