import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";
import regimg from "./134945-zpunet-icon.mp4";
import "./Register.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

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

      toast.success("Submitted the register data!", {
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
      <h1 className="signup-header">Please Register Here</h1>
      <Container className="form-cont">
        <Row>
          <Col xs={12} md={6}>
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

              <NavLink className="nav-route" to="/login">
                <p className="text-danger route">
                  Already SignUp? Please Click Here..{" "}
                </p>
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
              className="lotti-vid"
            >
              <source
                src={regimg}
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
