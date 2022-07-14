import { useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/image/header3.jpg";

import "../styles/hero-section.css";
import "../styles/home.css";

import Highlight from "../components/Highlight";
import DealsCard from "../components/DealsCard";

import pinta from "../assets/image/logo-pinta.png";
import eastcruise from "../assets/image/eastcruise.jpg";
import dpk from "../assets/image/dpk.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useDispatch, useSelector } from "react-redux";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getBestDeals, reset } from "../redux/dealsRedux";
import { getHighlightDeals, resetHighlight } from "../redux/highlightRedux";

import Spinner from "../components/Spinner";
import { useState } from "react";
import { getFeaturedDeals, resetFeatured } from "../redux/featuredRedux";
import HTMLReactParser from "html-react-parser";
import { Link } from "react-router-dom";

const Home = () => {
    //const deals = useSelector((state) => state.deals.currentDeals);
    const { currentDeals, isLoading, isError, message } = useSelector(
        (state) => state.deals
    );
    const {
        highlightDeals,
        isLoadingHighlight,
        isErrorHighlight,
        messageHighlight,
    } = useSelector((state) => state.highlight);

    const {
        featuredDeals,
        isLoadingFeatured,
        isErrorFeatured,
        messageFeatured,
    } = useSelector((state) => state.featured);

    const dispatch = useDispatch();

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    // useEffect(() => {
    //     getDeals(dispatch);
    // }, [dispatch]);

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getBestDeals());

        return () => {
            dispatch(reset());
        };
    }, [isError, message, dispatch]);

    useEffect(() => {
        if (isErrorHighlight) {
            console.log(messageHighlight);
        }

        dispatch(getHighlightDeals());

        return () => {
            dispatch(resetHighlight());
        };
    }, [isErrorHighlight, messageHighlight, dispatch]);

    useEffect(() => {
        if (isErrorFeatured) {
            console.log(messageFeatured);
        }

        dispatch(getFeaturedDeals());

        return () => {
            dispatch(resetFeatured());
        };
    }, [isErrorFeatured, messageFeatured, dispatch]);

    const truncate = function (str) {
        return str.length > 10 ? str.substring(0, 120) + "..." : str;
    };

    return (
        <div>
            <Header type="wImg" />
            <section className="hero__section">
                <div className="hero__content">
                    <h5>Plan Your Travel Now!</h5>
                    <p>
                        Experience the various exciting tour and travel packages
                        and make hotel reservations, find vacation packages,
                        search cheap hotels and events.
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
                {highlightDeals.map((item, index) => (
                    <Highlight key={index} item={item} />
                ))}
            </section>

            <section className="deals__section">
                <Container>
                    <Row>
                        <Col
                            lg="12"
                            className="best__deals d-flex align-items-center"
                        >
                            <div>
                                <h4 className="heading__title">
                                    Best Deals In This Month
                                </h4>
                                <p className="heading__paragraph">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {isLoading ? (
                                <Spinner />
                            ) : (
                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    className="featured__deals-slider"
                                >
                                    {currentDeals.map((item) => (
                                        <DealsCard key={item.id} item={item} />
                                    ))}
                                </Carousel>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="deals__section">
                <Container>
                    <Row>
                        <Col
                            lg="12"
                            className="best__deals d-flex align-items-center"
                        >
                            <div>
                                <h4 className="heading__title">
                                    Featured Deals
                                </h4>
                                <p className="heading__paragraph">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <div className="desktop">
                        {featuredDeals.map((item, index) =>
                            !(index % 2) ? (
                                <Row key={index} className="mb-5">
                                    <Col lg="7">
                                        <img
                                            src={item.img}
                                            alt="deals-img"
                                            className="w-100 featured__img"
                                        />
                                    </Col>
                                    <Col lg="5" className="featured__content">
                                        <h5>{item.title}</h5>
                                        <div className="excerpt">
                                            {HTMLReactParser(
                                                `${truncate(item.desc)}`
                                            )}
                                        </div>
                                        <div className="link__view">
                                            <Link
                                                to={`/deal-details/${item._id}`}
                                            >
                                                View Details
                                                <i class="ri-arrow-right-s-line"></i>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            ) : (
                                <Row key={index} className="mb-5">
                                    <Col lg="5" className="featured__content">
                                        <h5>{item.title}</h5>
                                        <div className="excerpt">
                                            {HTMLReactParser(
                                                `${truncate(item.desc)}`
                                            )}
                                        </div>
                                        <div className="link__view">
                                            <Link
                                                to={`/deal-details/${item._id}`}
                                            >
                                                View Details
                                                <i class="ri-arrow-right-s-line"></i>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col lg="7">
                                        <img
                                            src={item.img}
                                            alt="deals-img"
                                            className="w-100 featured__img"
                                        />
                                    </Col>
                                </Row>
                            )
                        )}
                    </div>
                    <div className="mobile">
                        {featuredDeals.map((item, index) => (
                            <Row key={index} className="mb-5">
                                <Col lg="7">
                                    <img
                                        src={item.img}
                                        alt="deals-img"
                                        className="w-100 featured__img"
                                    />
                                </Col>
                                <Col lg="5" className="featured__content">
                                    <h5>{item.title}</h5>
                                    <div className="excerpt">
                                        {HTMLReactParser(
                                            `${truncate(item.desc)}`
                                        )}
                                    </div>
                                    <div className="link__view">
                                        <Link to={`/deal-details/${item._id}`}>
                                            View Details
                                            <i class="ri-arrow-right-s-line"></i>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="brand__section">
                <Container>
                    <Row>
                        <Col
                            lg="12"
                            className="best__deals d-flex align-items-center"
                        >
                            <div>
                                <h4 className="heading__title">
                                    Our Branding Partners
                                </h4>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            className="featured__deals-slider"
                        >
                            <div className="brand__logo">
                                <img
                                    src={pinta}
                                    alt="brand-img"
                                    className="logo__brand-img"
                                />
                            </div>
                            <div className="brand__logo">
                                <img
                                    src={eastcruise}
                                    alt="brand-img"
                                    className="logo__brand-img"
                                />
                            </div>
                            <div className="brand__logo">
                                <img
                                    src={dpk}
                                    alt="brand-img"
                                    className="logo__brand-img"
                                />
                            </div>
                        </Carousel>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
