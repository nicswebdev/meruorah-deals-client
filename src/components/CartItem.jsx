import React from "react";

import "../styles/cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cartRedux";

const CartItem = ({ item }) => {
  const { _id, title, price } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        _id,
        title,
        price,
      })
    );
  };

  const decrementItem = () => {
    dispatch(cartActions.removeItem(_id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(_id));
  };

  return (
    <div className="cart__item">
      <div className="cart__item-info d-flex gap-2">
        {/* <img src="" alt="" /> */}

        <div className="cart__packages-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h5 className="cart__packages-title">{item.title}</h5>
            <p className="d-flex align-items-center gap-2 cart__packages-price">
              {item.quantity}x <span>IDR {item.totalPrice}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">{item.quantity}</span>
              <span className="decrease__btn" onClick={decrementItem}>
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn" onClick={deleteItem}>
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
