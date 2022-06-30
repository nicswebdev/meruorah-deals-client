import React from "react";

import { Row, Col } from "reactstrap";

import dealsImg5 from "../assets/image/deals5.jpg";

import "../styles/deals-list.css";

import NumberFormat from "react-number-format";
import HTMLReactParser from "html-react-parser";
import { Link } from "react-router-dom";

function DealsList({item}) {
  return (
    <div className="deals__list mt-4">
      <Row>
        <Col lg="5">
          <div className="list__img">
            <img src={item.img} alt="deals-img" className="w-100 h-100" />
          </div>
        </Col>
        <Col lg="7">
          <div className="list__content">
            <div className="list__content_details">
              <h5>{item.title}</h5>
              <div style={{maxHeight: "60px", overflow: "hidden"}}>{HTMLReactParser(`${item.desc}`)}</div>
            </div>
            <div className="list__content_price d-flex align-items-center justify-content-between">
              <h5 className="price">
                <NumberFormat
                  value={item.dealPrice}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"IDR "}
                  renderText={(value) => value}
                />
              </h5>
              <Link to={`/deal-details/${item._id}`}>
                <button className="button__view">View Details</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DealsList;
