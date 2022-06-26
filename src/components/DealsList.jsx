import React from "react";

import { Row, Col } from "reactstrap";

import dealsImg5 from "../assets/image/deals5.jpg";

import "../styles/deals-list.css";

import NumberFormat from "react-number-format";

function DealsList() {
  return (
    <div className="deals__list mt-4">
      <Row>
        <Col lg="5">
          <div className="list__img">
            <img src={dealsImg5} alt="deals-img" className="w-100 h-100" />
          </div>
        </Col>
        <Col lg="7">
          <div className="list__content">
            <div className="list__content_details">
              <h5>Staycation</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="list__content_price d-flex align-items-center justify-content-between">
              <h5 className="price">IDR 1,000,000</h5>
              <button className="button__view">View Details</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DealsList;
