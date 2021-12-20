import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LeftHeader = () => {
    return (

        <div className="col">
            <div className="d-flex justify-content-between">
                <a className="u-social-url" title="facebook" target="_blank" href="https://facebook.com/name" rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "facebook"]} size="1x" />
                </a>
                <a className="u-social-url" title="twitter" target="_blank" href="https://twitter.com/name" rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "twitter"]} size="1x" />
                </a>
                <a className="u-social-url" title="instagram" target="_blank" href="https://www.instagram.com/name" rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "instagram"]} size="1x" />
                </a>
            </div>
        </div>
    )
}

export default LeftHeader;