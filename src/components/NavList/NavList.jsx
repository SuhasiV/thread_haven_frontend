/* eslint-disable */
import { Link } from "react-router-dom";
import "./NavList.scss";

const NavList = () => {
  return (
    <div className="container">
      <Link to="/products/1" className="link">
        WOMEN
      </Link>
      <br />
      <Link to="/products/2" className="link">
        MEN
      </Link>
      <br />
      <Link to="/about" className="link">
        ABOUT
      </Link>
      <br />
      <Link to="/contact" className="link">
        CONTACT
      </Link>
    </div>
  );
};

export default NavList;
