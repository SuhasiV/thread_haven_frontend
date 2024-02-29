import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <BsFacebook />
        <FaInstagramSquare />
        <BsLinkedin />
      </div>
      <div className="info">
        <Link className="link" to="/ShoppingSite/">
          Home
        </Link>
        <div className="dot">.</div>
        <Link className="link" to="/ShoppingSite/products/2">
          Women
        </Link>
        <div className="dot">.</div>
        <Link className="link" to="/ShoppingSite/products/1">
          Men
        </Link>
      </div>
      <div className="terms">Terms Of Use . Privacy Policy</div>
      <div className="copy">
        Copyright ©2023 All rights reserved | Terms & Privacy by ThreadHaven
      </div>
    </div>
  );
};

export default Footer;
