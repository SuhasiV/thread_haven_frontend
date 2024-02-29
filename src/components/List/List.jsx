import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "./List.scss";
import Card from "../Card/Card";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const subCategoriesFilter = subCats
    .map((item) => `&[filters][sub_categories][id][$eq]=${item}`)
    .join("");

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCategoriesFilter}&[filters][price][$lte]=${maxPrice}${
      sort ? `&sort=price:${sort}` : ""
    }`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
