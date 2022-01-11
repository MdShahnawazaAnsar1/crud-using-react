import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink className="bar" to="./" exact>
        Crud App
      </NavLink>
      <NavLink className="bar" to="all" exact>
        All Users
      </NavLink>
      <NavLink className="bar" to="add" exact>
        Add User
      </NavLink>
    </div>
  );
};

export default Header;
