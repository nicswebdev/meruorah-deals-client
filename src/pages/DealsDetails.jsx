import { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

import banner from "../assets/image/header.jpg";
import logo from "../assets/image/logo3.png";

import "../styles/deals-details.css";
import PackageCard from "../components/PackageCard";

import Footer from "../components/Footer";

import { useLocation } from "react-router-dom";

import { publicRequest } from "../requestMethods";
import NumberFormat from "react-number-format";

import parser from "html-react-parser";
import Header2 from "../components/Header2";
import Spinner from "../components/Spinner";
import Header from "../components/Header";

const DealsDetails = () => {
    const location = useLocation();

    const dealId = location.pathname.split("/")[2];

    const [packages, setPackages] = useState([]);
    const [deal, setDeal] = useState({});
    const [isLoadingDeals, setIsLoadingDeals] = useState(false);

    useEffect(() => {
        const getPackages = async () => {
            try {
                const res = await publicRequest.get("/packages?deal=" + dealId);

                setPackages(res.data);
            } catch (error) {}
        };

        getPackages();
    }, [dealId]);

    useEffect(() => {
        setIsLoadingDeals(true);
        const getDeal = async () => {
            try {
                const res = await publicRequest.get("/deals/find/" + dealId);
                setDeal(res.data);
                setIsLoadingDeals(false);
            } catch (error) {
                setIsLoadingDeals(false);
            }
        };

        getDeal();
    }, [dealId]);

    if (isLoadingDeals) {
        return <Spinner />;
    }

    return (
        <div>
            <Header type="woImg" />

            <section className="section__dealsimg">
                <Container>
                    <Row>
                        <Col lg="12">
                            <img
                                src={deal.img}
                                alt="banner-img"
                                className="w-100"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section__deals">
                <Container>
                    <Row>
                        <Col className="left__deals__col">
                            <div className="deals__title">
                                <h5>{deal.title}</h5>
                                <div className="deals__subtitle">
                                    {parser(`${deal.desc}`)}
                                </div>
                            </div>
                            <div className="details__price">
                                <div className="deals__price">
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
                                    <span className="fixed__price__text">
                                        <NumberFormat
                                            value={deal.fixedPrice}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"IDR "}
                                            renderText={(value) => value}
                                        />
                                    </span>
                                </div>
                                <div className="option__link__view">
                                    View Options{" "}
                                    <i class="ri-arrow-right-s-line"></i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section__package">
                <Container>
                    <Row>
                        <Col
                            lg="12"
                            className="package__options_title d-flex align-items-center"
                        >
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

            <section className="section__tc">
                <Container>
                    <Row>
                        <Col
                            lg="12"
                            style={{
                                paddingTop: "20px",
                                paddingBottom: "20px",
                                fontFamily: "Jost",
                            }}
                        >
                            {parser(`${deal.tc}`)}
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default DealsDetails;
