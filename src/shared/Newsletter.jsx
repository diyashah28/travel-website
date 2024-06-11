import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Newsletter.css";
//import maleTourist from "../../images/male-tourist.png";


const Newsletter = () => {
  return (
    <div className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful travel information</h2>
              <div className="newsletter__input">
                <input type="text" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Get our monthly travel E-magazine and stay updated with the latest travel experiences and trends. Our magazine includes ratings and reviews from our customers, articles from travel bloggers, brief history of the most popular tourism sites and much more.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/023/552/265/small_2x/boy-tourist-looks-through-binoculars-on-a-blue-background-copy-space-photo.jpg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newsletter;
