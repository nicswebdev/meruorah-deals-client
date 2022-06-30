import React, { useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

import heroImg2 from "../assets/image/header2.jpg";

import "../styles/hero-section.css";
import "../styles/category.css";

import DealsList from "../components/DealsList";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { getDeals } from "../redux/apiCalls";

const category = [
  {
    id: 1,
    category: "Attractions & Tickets",
  },
  {
    id: 2,
    category: "Events & Exhibitions",
  },
  {
    id: 3,
    category: "Outdoor Activities",
  },
  {
    id: 4,
    category: "Workshop & Culture",
  },
  {
    id: 5,
    category: "Tours & Gathering",
  },
  {
    id: 6,
    category: "Food & Dining",
  },
  {
    id: 7,
    category: "Accommodation",
  },
  {
    id: 8,
    category: "Travel Services",
  },
  {
    id: 9,
    category: "Sailing",
  },
];

const CategoryListing = () => {

  const deals = useSelector((state) => state.deals.currentDeals);
  const dispatch = useDispatch();

  useEffect(() => {
    getDeals(dispatch);
  }, []);

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
          <img src={heroImg2} alt="hero-img" className="w-100" />
        </div>
      </section>

      <section className="category__section">
        <Container>
          <Row>
            <Col lg="3 mt-4" className="category__column">
              <h5>Category</h5>
              <ul>
                {category.map((item) => (
                  <li key={item.id}>{item.category}</li>
                ))}
              </ul>
            </Col>
            <Col lg="9" className="deals__column">
              {deals.map((item) => (
                <DealsList key={item._id} item={item} />
              ))}
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default CategoryListing;
