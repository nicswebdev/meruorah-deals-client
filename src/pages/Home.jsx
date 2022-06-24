import React from "react";

import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/image/header.jpg";

import "../styles/hero-section.css";
import "../styles/home.css";

import Highlight from "../components/Highlight";
import DealsCard from "../components/DealsCard";

import dealsImg from "../assets/image/deals1.jpg";
import dealsImg2 from "../assets/image/deals2.jpg";
import dealsImg3 from "../assets/image/deals3.jpg";
import dealsImg4 from "../assets/image/deals4.jpg";
import dealsImg5 from "../assets/image/deals5.jpg";

import logo from "../assets/image/logo3.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const deals = [
  {
    id: 1,
    img: dealsImg,
    title: "2 or 3 Night Staycation @ Meruorah Komodo Labuan Bajo",
    price: "1,000,000",
  },
  {
    id: 2,
    img: dealsImg2,
    title: "2 or 3 Night Staycation @ Meruorah Komodo Labuan Bajo",
    price: "1,000,000",
  },
  {
    id: 3,
    img: dealsImg3,
    title: "2 or 3 Night Staycation @ Meruorah Komodo Labuan Bajo",
    price: "1,000,000",
  },
  {
    id: 4,
    img: dealsImg4,
    title: "2 or 3 Night Staycation @ Meruorah Komodo Labuan Bajo",
    price: "1,000,000",
  },
  {
    id: 5,
    img: dealsImg5,
    title: "2 or 3 Night Staycation @ Meruorah Komodo Labuan Bajo",
    price: "1,000,000",
  },
  {
    id: 6,
    img: dealsImg4,
    title: "2 or 3 Night Staycation @ Meruorah Komodo Labuan Bajo",
    price: "1,000,000",
  },
  {
    id: 7,
    img: dealsImg3,
    title: "2 or 3 Night Staycation @ Meruorah Komodo Labuan Bajo",
    price: "1,000,000",
  },
  {
    id: 8,
    img: dealsImg2,
    title: "2 or 3 Night Staycation @ Meruorah Komodo Labuan Bajo",
    price: "1,000,000",
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      <section className="hero__section">
        <div className="hero__content">
          <h5>Plan Your Travel Now!</h5>
          <p>
            Experience the various exciting tour and travel packages and make
            hotel reservations, find vacation packages, search cheap hotels and
            events.
          </p>
          <div className="search__bar">
            <input
              type="email"
              placeholder="Search over a million tour and travels, sight seeings, hotels and more"
            />
            <span>
              <i class="ri-search-line"></i>
            </span>
          </div>
        </div>
        <div className="hero__img">
          <img src={heroImg} alt="hero-img" className="w-100" />
        </div>
      </section>

      <section className="section__highlight">
        <Highlight />
      </section>

      <section className="deals__section">
        <Container>
          <Row>
            <Col lg="12" className="best__deals d-flex align-items-center">
              <div>
                <h4 className="heading__title">Best Deals In This Month</h4>
                <p className="heading__paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <button className="button__part">View All</button>
            </Col>
          </Row>
          <Row>
            {deals.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-2">
                <DealsCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="deals__section">
        <Container>
          <Row>
            <Col lg="12" className="best__deals d-flex align-items-center">
              <div>
                <h4 className="heading__title">Featured Deals</h4>
                <p className="heading__paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <button className="button__part">View All</button>
            </Col>
          </Row>
          <Row>
            {deals.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-2">
                <DealsCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="brand__section">
        <Container>
          <Row>
            <Col lg="12" className="best__deals d-flex align-items-center">
              <div>
                <h4 className="heading__title">Our Branding Partners</h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              lg="3"
              md="4"
              className="mt-4 d-flex align-items-center justify-content-center"
            >
              <img src={logo} alt="brand-img" />
            </Col>
            <Col
              lg="3"
              md="4"
              className="mt-4 d-flex align-items-center justify-content-center"
            >
              <img src={logo} alt="brand-img" />
            </Col>
            <Col
              lg="3"
              md="4"
              className="mt-4 d-flex align-items-center justify-content-center"
            >
              <img src={logo} alt="brand-img" />
            </Col>
            <Col
              lg="3"
              md="4"
              className="mt-4 d-flex align-items-center justify-content-center"
            >
              <img src={logo} alt="brand-img" />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
