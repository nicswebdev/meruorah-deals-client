import React from "react";
import { cartActions } from "../redux/cartRedux";

import "../styles/package-card.css";

import {useDispatch} from 'react-redux';
import NumberFormat from "react-number-format";
import parser from "html-react-parser";

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
        <p>{parser(`${desc}`)}</p>
      </div>
      <div className="right__side">
        <h5>
          <NumberFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"IDR "}
            renderText={(value) => value}
          />
        </h5>
        <button className="button__package_options" onClick={handleClick}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default PackageCard;
