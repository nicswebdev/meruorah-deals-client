import React from "react";

import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header2";

import "../styles/about-us.css";

const About = () => {
    return (
        <div>
            <Header type="woImg" />
            <section className="section__about">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h5>About Us</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Non magni architecto
                                laboriosam nostrum neque exercitationem dolor
                                molestiae, placeat expedita reiciendis sit rem
                                provident sapiente doloremque id itaque,
                                consequuntur omnis quo!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Non magni architecto
                                laboriosam nostrum neque exercitationem dolor
                                molestiae, placeat expedita reiciendis sit rem
                                provident sapiente doloremque id itaque,
                                consequuntur omnis quo!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Non magni architecto
                                laboriosam nostrum neque exercitationem dolor
                                molestiae, placeat expedita reiciendis sit rem
                                provident sapiente doloremque id itaque,
                                consequuntur omnis quo!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default About;
