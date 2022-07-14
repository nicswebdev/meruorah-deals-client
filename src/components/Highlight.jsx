import React from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import highlightImg from "../assets/image/highlight2.jpg";
import logo from "../assets/image/logo-pinta.png";

import "../styles/highlight.css";

function highlight({ item }) {
    return (
        <Container className="highlight__container">
            <Row className="row__highlight g-0">
                <Col lg="6" md="6">
                    <div className="highlight__img">
                        <img
                            src={item.img}
                            alt="highlight-img"
                            className="w-100"
                        />
                    </div>
                </Col>
                <Col lg="6" md="6" className="hightlight__right">
                    <div className="highlight__content">
                        <img
                            src={logo}
                            alt="logo"
                            className="highlight__logo"
                        />
                        <h5>{item.title}</h5>
                        <div className="price">
                            <span className="deals__price">
                                <NumberFormat
                                    value={item.dealPrice}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"IDR "}
                                    renderText={(value) => value}
                                />
                            </span>
                            <span className="fixed__price">
                                <NumberFormat
                                    value={item.fixedPrice}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"IDR "}
                                    renderText={(value) => value}
                                />
                            </span>
                        </div>
                        <div className="link__view">
                            <Link to={`/deal-details/${item._id}`}>
                                View Details{" "}
                                <i class="ri-arrow-right-s-line"></i>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default highlight;
