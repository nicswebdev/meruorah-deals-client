import React from "react";

import "../styles/package-card.css";

function PackageCard(props) {
  const { title, desc, price } = props.item;

  return (
    <div className="package__card">
      <div className="left__side">
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
      <div className="right__side">
        <h5>IDR {price}</h5>
        <button className="button__package_options">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default PackageCard;
