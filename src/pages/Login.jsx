import React, { useState, useContext } from "react";
import { Container, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import loginImg from "../images/login.png";
import userIcon from "../images/user.png";
import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    // Implement your handleChange logic here
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // Implement your submit logic here, e.g., call an API to authenticate the user
    console.log(credentials); // For now, just logging the credentials
 dispatch({type: 'LOGIN_START'})
 
 try{
  const res = await fetch(`${BASE_URL}/auth/login`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  credentials: 'include',
  body: JSON.stringify(credentials),
 })

const result = await res.json()
if(!res.ok) alert(result.message)
console.log(result.data)
dispatch({type: 'LOGIN_SUCCESS', payload:result.data})
navigate('/')
}
 
 catch (err)
 {
  dispatch({type:'LOGIN_FAILURE' , payload:err.message})
 }
 

  }
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
              <h2>Login</h2>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <input
                    type="text"
                    placeholder="Email"
                    required
                    id="email"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    id="password"
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button
                  className="btn secondary__btn auth__btn"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
              <p>
                Don't have an account? <Link to="/register">Create</Link>
              </p>
            </div>
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default Login;
