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

import { getDeals } from "../redux/apiCalls";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
    const deals = useSelector((state) => state.deals.currentDeals);
    const dispatch = useDispatch();
    //const { isFetching } = useSelector((state) => state.deals);

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

    useEffect(() => {
        getDeals(dispatch);
    }, [dispatch]);

    return (
        <div>
            <Header />
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
                <Highlight />
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
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="featured__deals-slider"
                            >
                                {deals.map((item) => (
                                    <DealsCard key={item.id} item={item} />
                                ))}
                            </Carousel>
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
                        {deals.map((item, index) =>
                            !(index % 2) ? (
                                <Row className="mb-5">
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
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Pariatur, ea. Laboriosam earum quia
                                            repellendus, accusamus maiores
                                            voluptatibus necessitatibus quod
                                            recusandae cum consequatur error
                                            neque ex. Nulla non perspiciatis
                                            quam modi.
                                        </div>
                                        <div className="link__view">
                                            View Details{" "}
                                            <i class="ri-arrow-right-s-line"></i>
                                        </div>
                                    </Col>
                                </Row>
                            ) : (
                                <Row className="mb-5">
                                    <Col lg="5" className="featured__content">
                                        <h5>{item.title}</h5>
                                        <div className="excerpt">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Pariatur, ea. Laboriosam earum quia
                                            repellendus, accusamus maiores
                                            voluptatibus necessitatibus quod
                                            recusandae cum consequatur error
                                            neque ex. Nulla non perspiciatis
                                            quam modi.
                                        </div>
                                        <div className="link__view">
                                            View Details{" "}
                                            <i class="ri-arrow-right-s-line"></i>
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
                        {deals.map((item, index) => (
                            <Row className="mb-5">
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
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Pariatur, ea.
                                        Laboriosam earum quia repellendus,
                                        accusamus maiores voluptatibus
                                        necessitatibus quod recusandae cum
                                        consequatur error neque ex. Nulla non
                                        perspiciatis quam modi.
                                    </div>
                                    <div className="link__view">
                                        View Details{" "}
                                        <i class="ri-arrow-right-s-line"></i>
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
