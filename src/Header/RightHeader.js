
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const submitForm = () =>
  alert("submit");
const RightHeader = () => {
  const [search, setSearch] = useState();

  const onChangeSearch = (event) => setSearch(event.target.value);
  return (
    <div className="col-12 col-lg-8 search">
      <div className="d-flex justify-content-end align-items-center">
        <nav className="navbar">
          <form className="form-inline">
            <div className="input-group">
              <input type="text" className="form-control" value={search} onChange={onChangeSearch} placeholder="Recherche" aria-label="Username" aria-describedby="basic-addon1" />
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