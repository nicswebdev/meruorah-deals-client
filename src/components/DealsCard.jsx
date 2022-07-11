import React from "react";

import "../styles/deals-card.css";

import { Link } from "react-router-dom";

import dealsImg from "../assets/image/deals1.jpg";

import NumberFormat from "react-number-format";

function DealsCard({ item }) {
    //const { id, title, img, price } = props.item;

    return (
        <div className="deals_item">
            <div className="deals__card_content">
                <div className="deals__img">
                    <img src={item.img} alt="deals-img" className="w-100" />
                </div>
                <div className="deals__content">
                    <h6>Hotel</h6>
                    <h5>
                        <Link to={`/deal-details/${item._id}`}>
                            {item.title}
                        </Link>
                    </h5>
                    <div className="deals__content__details">
                        <span className="deals__price">
                            <NumberFormat
                                value={item.dealPrice}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"IDR "}
                                renderText={(value) => value}
                            />
                        </span>
                        <div className="deals__view">
                            <Link to={`/deal-details/${item._id}`}>
                                View Details{" "}
                                <i class="ri-arrow-right-s-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DealsCard;
