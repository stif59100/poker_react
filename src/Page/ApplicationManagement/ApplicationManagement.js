import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const ApplicationManagement = () => {
    return(
        <section className="row authentication" >
            <div className="col-12 col-lg-6 offset-lg-3">
                <Link to={{ pathname: `/UsersManagement` }} >
                    <button className="btn btn-grey-light">
                    <FontAwesomeIcon icon={["fa", "user-cog"]} />
                    <span>Gestion Utilisateurs</span>
                    </button>
                </Link> 
                <Link to={{ pathname: `/` }} >
                    <button className="btn btn-grey-light">
                    <FontAwesomeIcon icon={["fa", "cog"]} />
                    <span>Gestion paramètres</span>
                    </button>
                </Link> 
            </div>
        </section>
    )
}
export default ApplicationManagement;