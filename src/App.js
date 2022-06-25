import About from "./pages/About";
import CategoryListing from "./pages/CategoryListing";
import Contact from "./pages/Contact";
import DealsDetails from "./pages/DealsDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ScrollToTop from "./components/ScrollToTop";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  const userData = useSelector((state) => state.user.currentUser);

  console.log(userData);

  return (
    <Router>
      <ScrollToTop>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryListing />} />
          <Route path="/deal-details/:dealId" element={<DealsDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={
              !!userData && userData?.accessToken ? (
                <Navigate to="/" />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/register"
            element={
              !!userData && userData?.accessToken ? <Navigate to="/" /> : <Register />
            }
          />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
