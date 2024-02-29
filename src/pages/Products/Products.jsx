import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";
import { useSelectedItemId } from "../../SelectedItemIdContext";
const Products = () => {
  const { selectedItemId, setSelectedItemId } = useSelectedItemId();
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [sort, setSort] = useState(null);

  const catId = parseInt(useParams().id);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const strSelectedItemId = selectedItemId ? selectedItemId.toString() : "";

  useEffect(() => {
    if (strSelectedItemId && !selectedSubCats.includes(strSelectedItemId)) {
      setSelectedSubCats([strSelectedItemId]);
    }
  }, []);

  const handleChange = (e) => {
    setSelectedSubCats((prevSubcats) => {
      return selectedItemId
        ? prevSubcats.filter((item) => item !== strSelectedItemId)
        : prevSubcats;
    });

    setSelectedItemId(null);

    const isChecked = e.target.checked;
    const value = e.target.value;

    setSelectedSubCats((prevSelectedSubCats) =>
      isChecked
        ? [...prevSelectedSubCats, value]
        : prevSelectedSubCats.filter((item) => item !== value)
    );
  };
  return (
    <div className="products">
      <div className="left">
        <div className="sticky-wrapper">
          <div className="filterItem">
            <h2>Product Categories</h2>
            {data?.map((item) => (
              <div className="inputItem" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))}
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={10000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
      </div>
      {error ? (
        "Something went wrong."
      ) : loading ? (
        "loading"
      ) : (
        <div className="right">
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
          />
        </div>
      )}
    </div>
  );
};

export default Products;
