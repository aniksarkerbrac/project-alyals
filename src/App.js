import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Register from "./components/Signup/Register";
import Login from "./components/SignIn/Login";
import Checkout from "./components/Checkout/Checkout";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Header />
              <TopNavbar />
              <Home />
            </>
          }
        />
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <TopNavbar />
              <Home />
            </>
          }
        />
        <Route exact path="/register" element={<Register></Register>} />
        <Route exact path="/login" element={<Login></Login>} />
        <Route exact path="/checkout" element={<Checkout></Checkout>} />
        <Route exact path="/product-details" element={<ProductDetails></ProductDetails>} />
      </Routes>
    </Router>
  );
}

export default App;
