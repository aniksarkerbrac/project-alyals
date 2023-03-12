import React, { useState } from "react";

import Container from "@mui/material/Container";
import "./Login.css"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import lotti from "./134945-zpunet-icon.mp4"
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const user = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://app-72e33e07-be7e-4025-af7d-6061359ca520.cleverapps.io/authenticate",
        user
      );
      localStorage.setItem("token", response.data.access_token);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <h1 className="signin-header">Please Login Here</h1>
      <Container >
      
        <Row>
          <Col xs={12} md={6}>
            <div>
              <form onSubmit={handleSubmit}>

                
                <input
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-4"
                />
                {/* <p className="text-danger">{errors.firstName?.message}</p> */}

                <input
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-4"
                />

                <input
                  type="submit"
                  className="bg-success border-0 text-light"
                />
              </form>
              
<NavLink className="nav-route-signin" to="/register">
<p className="text-danger route-signin">Already SignIn? Please Click Here.. </p>
</NavLink>
            </div>
          </Col>

          <Col xs={12} md={6}>

          <video
              loop="true"
              autoPlay="autoplay"
              muted
              width={400}
              height={400}
              className="lotti-vid-signin"
            >
              <source
                src={lotti}
                type="video/mp4"
                style={{ marginTop: "4rem" }}
              />
            </video>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
}
