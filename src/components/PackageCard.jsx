import React from "react";
import { cartActions } from "../redux/cartRedux";

import "../styles/package-card.css";

import { useDispatch } from "react-redux";
import NumberFormat from "react-number-format";
import parser from "html-react-parser";

function PackageCard(props) {
    const { _id, title, desc, price } = props.item;

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(cartActions.addItem({ _id, title, desc, price }));
    };

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
                <button className="package__link__view" onClick={handleClick}>
                    Add To Cart <i class="ri-arrow-right-s-line"></i>
                </button>
            </div>
        </div>
    );
}

export default PackageCard;
