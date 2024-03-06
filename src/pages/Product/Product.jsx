import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { useWishlistProducts } from "../../redux/useWishlist";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState({ name: null, isClicked: false });

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const [wishlistedProd, dispatchwishlist] = useWishlistProducts();

  const handleOnWishlist = (id) => {
    const isStarred = wishlistedProd.includes(id);

    if (isStarred) {
      dispatchwishlist({ type: "UNLIKE", id });
    } else {
      dispatchwishlist({ type: "LIKE", id });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No product data found</div>;

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={data?.attributes?.img?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={data?.attributes?.img2?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={data?.attributes[selectedImg]?.data?.attributes?.url}
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span>{data?.attributes?.desc?.[0]?.children?.[0]?.text}</span>
            <span className="price">${data?.attributes?.price}</span>
            <span>
              <b>Select Size:</b>
            </span>
            <div>
              {data?.attributes?.size?.data.map((item) => (
                <button
                  className="size"
                  key={item.size}
                  onClick={() => {
                    setSize({ name: item.size, isClicked: !size.isClicked });
                  }}
                >
                  {item.size === size.name ? (
                    <div className="sizeActive">{item.size}</div>
                  ) : (
                    item.size
                  )}
                </button>
              ))}
            </div>

            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    size: size.name,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item" onClick={() => handleOnWishlist(data.id)}>
                {wishlistedProd.includes(data.id) ? (
                  <div
                    style={{
                      display: "flex",
                      alignItem: "center",
                      gap: "10px",
                    }}
                  >
                    <FavoriteBorderIcon style={{ color: "purple" }} />{" "}
                    <span style={{ color: "purple" }}>WISHLISTED</span>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItem: "center",
                      gap: "10px",
                    }}
                  >
                    <FavoriteBorderIcon /> ADD TO WISH LIST
                  </div>
                )}
              </div>
            </div>

            <div className="info">
              <p>
                Additional info
                <ul>
                  {data?.attributes?.additionalInfo?.map((item) =>
                    item.children.map((child) =>
                      child.type === "text" ? (
                        <li key={child.text}>{child.text}</li>
                      ) : null
                    )
                  )}
                </ul>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
