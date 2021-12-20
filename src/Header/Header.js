import Menu from "../Menu/Menu";
import RightHeader from "./RightHeader";
import LeftHeader from "./LeftHeader";
const Header = () => {
  return (
    <header className="row bg-grey">
      <div className="col-12">
        <div className="row">
          <LeftHeader />
          <RightHeader />
        </div>
      </div>
      <div className="col-12">
        <div className="row">
          <Menu />
        </div>
      </div>
    </header>

  );
}

export default Header;