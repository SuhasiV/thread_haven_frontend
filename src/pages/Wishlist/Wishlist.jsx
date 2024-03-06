// import WishlistCard from "../../components/Card/WishlistCard";
// import { useWishlistProducts } from "../../redux/useWishlist";

// const WishList = () => {
//   const product = [
//     {
//       name: "product 1",
//       id: 1,
//     },
//     {
//       name: "product 2",
//       id: 7,
//     },
//     {
//       name: "product 3",
//       id: 27,
//     },
//     {
//       name: "product 3",
//       id: 2,
//     },
//   ];
//   const [wishlist, dispatchWishlist] = useWishlistProducts();

//   const handleClick = (id) => {
//     if (wishlist.includes(id)) {
//       dispatchWishlist({ type: "UNLIKE", id });
//     } else {
//       dispatchWishlist({ type: "LIKE", id });
//     }
//   };

//   return (
//     <div>
//       <div>
//         {product?.map((item) => (
//           <div key={item.id}>
//             <h2>{item.name}</h2>
//             <button onClick={() => handleClick(item.id)}>
//               {wishlist.includes(item.id) ? "UNLIKE" : "LIKE"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WishList;

import { useWishlistProducts } from "../../redux/useWishlist";
import WishlistCard from "../../components/Card/WishlistCard";
import "./Wishlist.scss";

const WishList = () => {
  const [wishlist] = useWishlistProducts();

  return (
    <div className="wishlist_container">
      {wishlist?.map((item) => (
        <div key={item} className="wishlist_Card">
          <WishlistCard id={item} />
        </div>
      ))}
    </div>
  );
};

export default WishList;
