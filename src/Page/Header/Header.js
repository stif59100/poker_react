import Menu from "../Menu/Menu";
import RightHeader from "./RightHeader";
import LeftHeader from "./LeftHeader";


const Header = (props) => {
  return (
    <header className="col-12 bg-grey-dark">
      <div className="row top-bar">
        <LeftHeader />
        <RightHeader />
      </div>
      <Menu />
    </header>

  );
}

export default Header;