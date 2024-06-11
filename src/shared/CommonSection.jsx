import React from "react";
import "./Commonsection.css";
import { Container, Row, Col } from "reactstrap";
const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CommonSection;
