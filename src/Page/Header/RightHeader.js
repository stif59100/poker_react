
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const submitForm = () =>
  alert("submit");
const RightHeader = () => {
  const [search, setSearch] = useState();

  const onChangeSearch = (event) => setSearch(event.target.value);
  return (
    <div className="col-12 col-lg-8 search">
      <div className="d-flex justify-content-end align-items-center containerSearch">
        <nav className="navbar">
          <form className="form-inline">
            <div className="input-group">
              <input type="text" className="form-control input-grey-light" value={search} onChange={onChangeSearch} placeholder="Recherche" aria-label="Username" aria-describedby="basic-addon1" />
              <span className="input-group-text text-gold-light border-gold-light" >
                <FontAwesomeIcon icon={['fas','search']}/></span>
            </div>
          </form>
        </nav>
      </div>
    </div>

  )
};
export default RightHeader;
/*
  <form classNameName="col" onSubmit={submitForm}>
    <button classNameName="u-search-button" type="submit">
      <FontAwesomeIcon icon="search" size="1x"/>
    </button>
    <input classNameName="u-search-input" type="search" name="search" />
  </form>*/