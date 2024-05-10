import React from "react";
import "./stylesA/cartProd.css";
import { deleteCartThunk, putCartThunk } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";

const CartProd = ({ prod }) => {
  const dispatch = useDispatch();
 
  const handleDelete = () => {
    dispatch(deleteCartThunk("/cart", prod.id));
  };

  const handleLess = () => {
    if (prod.quantity > 1) {
      dispatch(putCartThunk("/cart", { quantity: prod.quantity - 1 }, prod.id));
    }
  };
  const handlePlus = () => {
    dispatch(putCartThunk("/cart", { quantity: prod.quantity + 1 }, prod.id));
  };

  return (
    <article className="cartprod">
      <h3 className="cartprod_title">{prod.product?.title}</h3>
      <figure className="cartprod_img">
        <img src={prod.product?.images[0].url} alt="product image" />
      </figure>
      <div className="cartprod_container">
        <button onClick={handleLess}>-1</button>
        <span>{prod.quantity}</span>
        <button onClick={handlePlus}>+1</button>
      </div>
      <button onClick={handleDelete}>Delete</button>
      <span className="cartprod_price">
        Total: $ {prod.product?.price * prod.quantity}
      </span>
    </article>
  );
};

export default CartProd;
