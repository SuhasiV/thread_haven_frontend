import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ListIcon from "@mui/icons-material/List";
import "./Navbar.scss";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { useSelectedItemId } from "../../SelectedItemIdContext";
import NavList from "../NavList/NavList";

const Navbar = () => {
  const { setSelectedItemId } = useSelectedItemId();
  const [open, setOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="navwrapper">
        <div className="navleft">
          <div className="item">
            <Link
              className="navlink"
              to="/products/1"
              onClick={() => setSelectedItemId(null)}
            >
              WOMEN
            </Link>
          </div>
          <div className="item">
            <Link
              className="link"
              to="/products/2"
              onClick={() => setSelectedItemId(null)}
            >
              MEN
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            THREADHAVEN
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </div>
          <div className="icons">
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
            <div className="navList" onClick={() => setNavOpen(!navOpen)}>
              <ListIcon />
            </div>
          </div>
        </div>
      </div>
      {navOpen && <NavList />}
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
