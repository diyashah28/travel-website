import React, { useState, useContext } from "react";
import { Container, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import loginImg from "../images/login.png";
import userIcon from "../images/user.png";
import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: ""
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name,value}=e.target;
    setCredentials({...credentials,[name]: value});
    console.log(credentials);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData=new FormData(e.target);
    const requestData=Object.fromEntries(formData.entries());
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userName:credentials.userName,
          email:credentials.email,
          password:credentials.password
        })
      });
      const result = await res.json();

      if (!res.ok) alert(result.message);
      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section>
      <Container>
        <Col lg="8" className="m-auto">
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt="" />
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Register</h2>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    id="userName"
                    name="userName"
                    value={credentials.userName}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="text"
                    placeholder="Email"
                    required
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button
                  className="btn secondary__btn auth__btn"
                  type="submit"
                >
                  Create Account
                </Button>
              </Form>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default Register;
