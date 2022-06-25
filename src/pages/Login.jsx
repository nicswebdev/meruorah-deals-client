import {useState} from "react";

import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

import "../styles/login.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching} = useSelector((state)=>state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch,{email,password});
  }

  return (
    <div>
      <Header />
      <section className="login__section">
        <Container>
          <Row>
            <Col
              lg="5"
              md="6"
              sm="12"
              className="m-auto text-center login__content"
            >
              <h5>Login</h5>
              <form className="form mb-5">
                <div className="form__group gap-2">
                  <i class="ri-mail-line"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form__group gap-2">
                  <i class="ri-lock-line"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="login__btn" disabled={isFetching} onClick={handleClick}>
                  {isFetching ? "Loading..." : "Login"}
                </button>
              </form>
              <div className="link__register">
                Don't have an account ? Create an account.
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
