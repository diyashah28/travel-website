import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({item}) => {
  const {imgUrl,title,desc}=item;
  
  return (
    <div className="service__item">
      <div className="service__img"><i class="fa-solid fa-caravan"></i></div>
      
      <h5>{title}</h5>
      <p>{desc}</p>
      {/* <div className="service_item1">
      <i class="fa-solid fa-utensils"></i>
      <h3>Food and Drinks</h3>
      </div>
      <div className="service_item1">
      <i class="fa-solid fa-utensils"></i>
      <h3>Food and Drinks</h3>
      </div>
      <div className="service_item1">
      <i class="fa-solid fa-utensils"></i>
      <h3>Food and Drinks</h3>
      </div>
      <div className="service_item1">
      <i class="fa-solid fa-utensils"></i>
      <h3>Food and Drinks</h3>
      // </div> */}

    </div>
  );
};

export default ServiceCard;
