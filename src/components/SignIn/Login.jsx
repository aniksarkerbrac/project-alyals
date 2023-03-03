import React,{useState} from "react";

import Container from '@mui/material/Container';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import axios from "axios";
import { Col, Row } from "react-bootstrap";





export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit =async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

    const user = {
      email,
      password,
    };

    try {
      const response = await axios.post('https://app-72e33e07-be7e-4025-af7d-6061359ca520.cleverapps.io/authenticate', user);
      localStorage.setItem("token", response.data.token);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

 


  return (

    <>
    <Header/>
    <Container className="form-cont ms-4">
<h1 className="signup-header">Please Login Here</h1>
<Row>
<Col xs={12} md={8}>
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
       
          <input type="submit"  className="bg-success border-0 text-light" />
        </form>
      </div>
           
          </Col>


         
</Row>




</Container>

    <Footer></Footer>
    </>
   
  );
}