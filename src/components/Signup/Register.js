import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";
import regimg from "./134945-zpunet-icon.mp4";
import "./Register.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

export default function Register() {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();




  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://app-72e33e07-be7e-4025-af7d-6061359ca520.cleverapps.io/register",
        data
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      // redirect to the dashboard or protected route
          toast.success("Submitted the course data!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Header></Header>

      <Container className="form-cont ms-4">
        <h1 className="signup-header">Please Register Here</h1>
        <Row>
          <Col xs={12} md={8}>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Enter your firstName"
                  {...register("firstName", { required: true })}
                  className="mb-2"
                />
                <p className="text-danger">{errors.firstName?.message}</p>

                <input
                  placeholder="Enter your lastName"
                  {...register("lastName", { required: true, maxLength: 20 })}
                  className="mb-2"
                />

                <input
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                  className="mb-2"
                />

                <input
                  placeholder="Enter your password"
                  {...register("password", { required: true, minLength: 8 })}
                  className="mb-2"
                />
                {errors.password && errors.password.type === "required" && (
                  <p>Password is required</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className="text-danger">
                    Password must be at least 8 characters long
                  </p>
                )}

                <input
                  placeholder="Enter your User Name"
                  {...register("username", { required: true, maxLength: 20 })}
                  className="mb-2"
                />

                {/* <input
                  placeholder="confirm password"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 8,
                    validate: (value) =>
                      value === watch("password") ||
                      "The passwords do not match",
                  })}
                  className="mb-2"
                /> */}

                <input
                  placeholder="Enter your address"
                  {...register("address", { required: true, maxLength: 20 })}
                  className="mb-2"
                />

                <input
                  placeholder="Enter your phone number"
                  {...register("phone", { required: true })}
                  className="mb-2"
                />

                <input
                  placeholder="Enter your City"
                  {...register("city", { required: true })}
                  className="mb-2"
                />

                <input
                  placeholder="Role"
                  {...register("role", { required: true })}
                  className="mb-2"
                />

                <input
                  type="submit"
                  className="bg-success border-0 text-light"
                />
              </form>

              {/* 
<form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input
          name="firstName"
          ref={register({
            required: "first Name is required",
            maxLength: {
              value: 50,
              message: "first Name should not exceed 50 characters",
            },
          })}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>

      <div>
        <label>First Name</label>
        <input
          name="firstName"
          ref={register({
            required: "first Name is required",
            maxLength: {
              value: 50,
              message: "first Name should not exceed 50 characters",
            },
          })}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>

      <div>
        <label>Last Name</label>
        <input
          name="lastName"
          ref={register({
            required: "last Name is required",
            maxLength: {
              value: 50,
              message: "last Name should not exceed 50 characters",
            },
          })}
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>

      <div>
        <label>Email</label>
        <input
          name="email"
          ref={register({
            required: "email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>


      
      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          ref={register({
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should have at least 8 characters",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>


      <div>
        <label>UserName</label>
        <input
          name="username"
          type="text"
          ref={register({
            required: "userName is required",
            minLength: {
              value: 8,
              message: "Password should have at least 8 characters",
            },
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>


      <div>
        <label>Address</label>
        <input
          name="address"
          type="text"
          ref={register({
            required: "address is required",
          
          })}
        />
        {errors.address && <span>{errors.address.message}</span>}
      </div>



      <div>
        <label>Phone</label>
        <input
          name="phone"
          type="text"
          ref={register({
            required: "phone is required",
          
          })}
        />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>


      <div>
        <label>City</label>
        <input
          name="city"
          type="text"
          ref={register({
            required: "city is required",
          
          })}
        />
        {errors.city && <span>{errors.city.message}</span>}
      </div>


      <div>
        <label>Role</label>
        <input
          name="role"
          type="text"
          ref={register({
            required: "role is required",
          
          })}
        />
        {errors.role && <span>{errors.role.message}</span>}
      </div>

      <input type="submit">Signup</input>
    </form> */}
            </div>
          </Col>

          <Col xs={12} md={4}>
            <video
              loop="true"
              autoPlay="autoplay"
              muted
              width={400}
              height={400}
              className="lotti-vid"
            >
              <source
                src={regimg}
                type="video/mp4"
                style={{ marginTop: "4rem" }}
              />
            </video>

            {/* <video src={regimg} width={400} height={400} loop style={{marginTop:'4rem'}}></video> */}
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
}
