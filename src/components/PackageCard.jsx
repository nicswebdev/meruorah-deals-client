import React from "react";
import { cartActions } from "../redux/cartRedux";

import "../styles/package-card.css";

import {useDispatch} from 'react-redux';

function PackageCard(props) {
  const { _id, title, desc, price } = props.item;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cartActions.addItem({ _id, title, desc, price }));
  }

  return (
    <div className="package__card">
      <div className="left__side">
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
      <div className="right__side">
        <h5>IDR {price}</h5>
        <button className="button__package_options" onClick={handleClick}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default PackageCard;
