/* eslint-disable */
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { removeItem, resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <h5>Size: {item.size}</h5>
            <div className="price">
              {item.quantity} X ${item.price}
            </div>
          </div>
          <AiOutlineDelete
            className="delete"
            onClick={() =>
              dispatch(removeItem({ id: item.id, size: item.size }))
            }
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
