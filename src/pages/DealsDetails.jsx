import {useState, useEffect} from "react";

import { Container, Row, Col } from "reactstrap";

import banner from "../assets/image/header.jpg";
import logo from "../assets/image/logo3.png";

import "../styles/deals-details.css";
import PackageCard from "../components/PackageCard";

import Header from "../components/Header";
import Footer from "../components/Footer";

import {useLocation} from 'react-router-dom';

import {publicRequest} from "../requestMethods";
import NumberFormat from "react-number-format";

const DealsDetails = () => {

  const location = useLocation();
   
  const dealId = location.pathname.split("/")[2];

  const [packages, setPackages] = useState([]);
  const [deal, setDeal] = useState({});

  useEffect(() => {
    const getPackages = async () => {
      try {
        const res = await publicRequest.get(
          "/packages?deal=" + dealId
        );

        setPackages(res.data);
      } catch (error) {}
    };

    getPackages();
  }, [dealId]);

  useEffect(() => {
    const getDeal = async () => {
      try {
        const res = await publicRequest.get(
          "/deals/find/" + dealId
        );
        setDeal(res.data);
      } catch (error) {}
    };

    getDeal();
  }, [dealId]);
  
  return (
    <div>
      <Header />
      <section className="breadcrumb__deals">
        <Container>
          <Row>
            <Col lg="12">
              <h5>
                Hotel <i class="ri-arrow-right-s-line"></i> Meruorah Komodo
                Labuan Bajo <i class="ri-arrow-right-s-line"></i> {deal.title}
              </h5>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <img src={banner} alt="banner-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section__deals">
        <Container>
          <Row>
            <Col lg="8" className="left__deals__col">
              <div className="deals__title">
                <h5>{deal.title}</h5>
                <div className="deals__subtitle">{deal.desc}</div>
              </div>
            </Col>
            <Col lg="4" className="right__deals__col">
              <img src={logo} alt="logo-img" />
              <div className="details__price">
                <div className="deals__price d-flex align-items-center justify-content-center">
                  <span className="price__from">From </span>
                  <span className="price__text">
                    <NumberFormat
                      value={deal.dealPrice}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"IDR "}
                      renderText={(value) => value}
                    />
                  </span>
                </div>
                <button className="button__package_options">
                  Package Options
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section__package">
        <Container>
          <Row>
            <Col lg="12">
              <h5>Package Options</h5>
            </Col>
            {packages.map((item) => (
              <Col lg="12" className="mt-4" key={item._id}>
                <PackageCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default DealsDetails;
