import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const quick__links = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/register",
    display: "Register",
  },
  {
    path: "/login",
    display: "Login",
  },
];

const quick__links2 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              {/* <img src="" alt="" /> */}
              <p>
                Connect with us:
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to ='#'><i className="fa-brands fa-github"></i></Link>
                </span>
                <span>
                  <Link to ='#'><i class="fa-brands fa-facebook"></i></Link>
                </span>
                <span>
                  <Link to ='#'><i class="fa-brands fa-instagram"></i></Link>
                </span>
                {/* Add other social media links here */}
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem
                  key={index}
                  className="ps-0 border-0 d-flex align-items-center gap-3"
                >
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
          
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address:
                  </h6>
                  <p className="mb-0">New Delhi, India</p>

                
                
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                  <i className="fa-solid fa-phone"></i>
                  </span>
                  Phone:
                  </h6>
                  <p className="mb-0">+91 9876543210</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                  <i className="fa-regular fa-envelope"></i>
                  </span>
                 Email:
                  </h6>
                  <p className="mb-0">drishya.diya@gmail.com</p>
              </ListGroupItem>

            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
