import * as React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";
import regimg from "./134945-zpunet-icon.mp4"
import "./Register.css"
import { Container, Row,Col} from "react-bootstrap";
import axios from "axios";


export default function Register() {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // });
 

  

  
  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://app-72e33e07-be7e-4025-af7d-6061359ca520.cleverapps.io/authenticate', data);
      localStorage.setItem('token', response.data.token);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const validatePhoneNumber = (value) => {
    const regex = /^[0-9\b]+$/; // Regex to allow only numbers
    if (!value) {
      return "Mobile number is required";
    } else if (value.length < 10) {
      return "Mobile number must be at least 10 digits";
    } else if (!regex.test(value)) {
      return "Invalid mobile number";
    }
  };

  
  return (
    <>
    
      <Header></Header>
      <h1 className="signup-header">Please Register Here</h1>
<Container className="form-cont ms-4">

<Row>
<Col xs={12} md={6}>
<form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Enter your firstName"
            {...register("firstName", { required: true, maxLength: 20 })} 
            className="mb-2"
          />

          <input placeholder="Enter your lastName" {...register("lastName", { required: true, maxLength: 20 })}   className="mb-2" />


          <input
            placeholder="Enter your password"
            {...register("password", {
              required: true,
              minLength: 8,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password must contain at least one letter and one number",
              },
            })}
            className="mb-2"
          />

          <input
            placeholder="confirm password"
            {...register("confirmpassword", {
              required: true,
              minLength: 8,
              validate: (value) =>
                value === watch("password") || "The passwords do not match",
            })}
            className="mb-2"
          />

          <input
            placeholder="Enter your address"
            {...register("address", { required: true, maxLength: 20 })}
            className="mb-2"
          />

          <input
            placeholder="Enter your phone number"
            {...register("phone", { validate: validatePhoneNumber })}
            className="mb-2"
          />

          <input
           placeholder="Enter your City"
           {...register("city", { required: true })}   className="mb-2" />

         
          <input type="submit"  className="bg-success border-0 text-light"/>
        </form>
      </form>
           
          </Col>


          <Col xs={12} md={6}>
          <video
                loop="true"
                autoplay="autoplay"
                muted
                width={400} height={400}
                className="lotti-vid"
              >
                <source src={regimg} type="video/mp4"  style={{marginTop:'4rem'}}/>
              </video>

            {/* <video src={regimg} width={400} height={400} loop style={{marginTop:'4rem'}}></video> */}
          </Col>
</Row>




</Container>



      <Footer></Footer>
    </>
  );
}
