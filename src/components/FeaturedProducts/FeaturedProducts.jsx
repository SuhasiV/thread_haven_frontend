import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="title">{type} products</div>
      <div className="productList">
        {error
          ? "Something went wrong!"
          : loading
          ? "Bringing you our latest products!"
          : data?.map((item) => (
              <div className="singleProduct">
                <Card item={item} key={item.id} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
