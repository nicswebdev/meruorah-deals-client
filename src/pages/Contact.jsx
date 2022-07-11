import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";

import "../styles/contact.css";
import "../styles/login.css";

const Contact = () => {
    return (
        <div>
            <Header2 />
            <section className="section__contact">
                <Container>
                    <Row>
                        <Col lg="4">
                            <h5 className="contact__title">Contact Details</h5>
                            <p className="contact__desc">
                                For more information and reservation, please
                                contact us at:
                            </p>
                            <div>
                                <ListGroup className="contact__info">
                                    <ListGroupItem>
                                        <h5>Address: </h5>
                                        <p>
                                            Kawasan Marina Jalan Soekarno Hatta,
                                            Labuan Bajo, West Manggarai, NTT
                                            86711
                                        </p>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <h5>Phone: </h5>
                                        <p>+62 385 2440234</p>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <h5>WhatsApp: </h5>
                                        <p>+62 813-3848-5939</p>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <h5>E-mail: </h5>
                                        <p>stay@meruorah.com</p>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col lg="8">
                            <form className="form mb-5">
                                <Row>
                                    <Col lg="6">
                                        <div className="form__group gap-2">
                                            <i class="ri-user-line"></i>
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <div className="form__group gap-2">
                                            <i class="ri-user-line"></i>
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="12">
                                        <div className="form__group gap-2">
                                            <i class="ri-mail-line"></i>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="12">
                                        <div className="form__group gap-2">
                                            <i class="ri-mail-line"></i>
                                            <textarea
                                                placeholder="Message"
                                                rows="5"
                                            ></textarea>
                                        </div>
                                    </Col>
                                </Row>

                                <button type="submit" className="login__btn">
                                    Submit
                                </button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
