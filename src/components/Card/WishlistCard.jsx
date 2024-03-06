import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./WishListCard.scss";

const WishlistCard = ({ id }) => {
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  // Check if data is still loading or if an error occurred
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Ensure data is not null and has the necessary properties before rendering
  if (!data || !data.id) return <div>Product not found.</div>;
  return (
    <div className="wishlist_card">
      <Link to={`/product/${data.id}`} className="wishLink">
        <div>
          <div className="image">
            {data?.attributes.isNew && <span>New Season</span>}
            <img
              src={data?.attributes?.img?.data?.attributes?.url}
              alt=""
              className="img1"
            />
            <img
              src={data?.attributes?.img2?.data?.attributes?.url}
              alt=""
              className="img2"
            />
          </div>
          <h2>{data?.attributes.title}</h2>
          <hr style={{ width: "100%", marginTop: "0px" }} />
          <div className="prices">
            <h3>Rs.{data?.oldPrice || data?.attributes.price + 20}</h3>
            <h3>Rs.{data?.attributes.price}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WishlistCard;
