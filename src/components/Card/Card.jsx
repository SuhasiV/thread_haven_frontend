import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div style={{}}>
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="img1"
          />
          <img
            src={
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="img2"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <hr style={{ width: "100%", marginTop: "0px" }} />
        <div className="prices">
          <h3>Rs.{item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>Rs.{item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
