import React from "react";

import { Row, Col } from "reactstrap";

import dealsImg5 from "../assets/image/deals5.jpg";

import "../styles/deals-list.css";

import NumberFormat from "react-number-format";
import HTMLReactParser from "html-react-parser";
import { Link } from "react-router-dom";

function DealsList({ item }) {
    const truncate = function (str) {
        return str.length > 10 ? str.substring(0, 120) + "..." : str;
    };

    return (
        <div className="deals__list mt-4">
            <Row>
                <Col lg="5">
                    <div className="list__img">
                        <img
                            src={item.img}
                            alt="deals-img"
                            className="w-100 h-100"
                        />
                    </div>
                </Col>
                <Col lg="7">
                    <div className="list__content">
                        <div className="list__content_details">
                            <h5>{item.title}</h5>
                            <div className="desc__list">
                                {HTMLReactParser(`${truncate(item.desc)}`)}
                            </div>
                        </div>
                        <div className="list__content_price">
                            <h5 className="price">
                                <NumberFormat
                                    value={item.dealPrice}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"IDR "}
                                    renderText={(value) => value}
                                />
                            </h5>
                            <h5 className="fixed__price">
                                <NumberFormat
                                    value={item.fixedPrice}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"IDR "}
                                    renderText={(value) => value}
                                />
                            </h5>
                            <Link
                                to={`/deal-details/${item._id}`}
                                className="deals__list-view"
                            >
                                View Details{" "}
                                <i class="ri-arrow-right-s-line"></i>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default DealsList;
