import React from "react";

import { Container, Row, Col } from "reactstrap";

import highlightImg from "../assets/image/highlight.jpg";
import logo from "../assets/image/logo3.png";

import "../styles/highlight.css";

function highlight() {
  return (
    <Container className="highlight__container">
      <Row className="row__highlight g-0">
        <Col lg="8" md="6">
          <div className="highlight__img">
            <img src={highlightImg} alt="highlight-img" className="w-100" />
          </div>
        </Col>
        <Col lg="4" md="6" className="hightlight__right">
          <div className="highlight__content">
            <img src={logo} alt="logo" className="highlight__logo" />
            <h5>2 or 3 Night Staycation @ Meruorah Komodo Labuan Bajo</h5>
            <div className="price d-flex align-items-center gap-2">
              <span className="deals__price">IDR 1,000,000</span>
              <span className="fixed__price">IDR 1,800,000</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default highlight;
