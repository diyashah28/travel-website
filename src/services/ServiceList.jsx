import React from "react";
import ServiceCard from "./ServiceCard";
import { Row, Col } from "reactstrap";

const ServicesData = [
  {
    imgUrl:"https://png.pngtree.com/png-vector/20190216/ourmid/pngtree-vector-fast-food-icon-png-image_541850.jpghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Apaga5jwVrEATRb8fbP3z9aaxuRnow30jGDet2Du_g&shttps://cdn4.iconfinder.com/data/icons/hildren-babies-little-ones-small-children-young-on/192/.svg-11-512.png",
    title: "Food and Drinks",
    desc: "Our package includes a holisitic five course meal for breakfast, lunch and dinner"
  },
  {
    
    title: "Best Tour Guide", 
    desc: "Find friendly and welcoming tour guides who speak your native language",
  },
  {
    
    title: "Customization",
  desc: "Bringing your dream tour to life; we curtail our tours as per your wishes"
  },
];

const ServiceList = () => {
  return (
    <Col lg="12">
      <Row className="ServicesData">
        {ServicesData.map((item, index) => (
          <Col lg="4" key={index}>
            <ServiceCard item={item} />
          </Col>
        ))}
      </Row>
    </Col>
    // <Col lg="12">
    //   <Row className="ServicesData">
    //     <ServiceCard />
    //   </Row>
    // </Col>
  );
};



export default ServiceList;
