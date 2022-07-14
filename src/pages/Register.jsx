import { useState } from "react";

import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";

import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

import "../styles/login.css";

import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Register = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.register);

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        register(dispatch, { fname, lname, email, password });

        if (error === false) {
            navigate("/login");
        }
    };

    return (
        <div>
            <Header type="woImg" />
            <section className="login__section">
                <Container>
                    <Row>
                        <Col
                            lg="5"
                            md="6"
                            sm="12"
                            className="m-auto text-center login__content"
                        >
                            <h5>Register</h5>
                            <form className="form mb-5">
                                <Row>
                                    <Col lg="6">
                                        <div className="form__group gap-2">
                                            <i class="ri-user-line"></i>
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                onChange={(e) =>
                                                    setFname(e.target.value)
                                                }
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
                                                onChange={(e) =>
                                                    setLname(e.target.value)
                                                }
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
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="12">
                                        <div className="form__group gap-2">
                                            <i class="ri-lock-line"></i>
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <button
                                    type="submit"
                                    className="login__btn"
                                    disabled={isFetching}
                                    onClick={handleClick}
                                >
                                    {isFetching ? "Loading..." : "Register"}
                                </button>
                            </form>
                            <div className="link__register">
                                Already have an account ? Sign In.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default Register;
