import React, {useState} from "react";
import { Card, CardBody, Button} from "reactstrap";
import { Link } from "react-router-dom";
import "./TourCard.css";
import calculateAvgRating from "../utils/avgRating";
import { BASE_URL } from "../utils/config";
const TourCard = ({ tour }) => {
  console.log(tour);
  //const { id, title, city, photo, price, reviews } = tour;
  const[userReview, SetuserReview] = useState(false)

  const id=tour._id;
  const title=tour.title;
  const city=tour.city;
  const photo=tour.photo;
  const price=tour.price;
  const review=tour.review;
  const getReview = async() => 
  {
    try
    {
      const response = await fetch(`${BASE_URL}/reviews/${review[0]}`)
      const jsonData= await response.json();
      SetuserReview(jsonData);
    }
    catch(err)
    {
      console.err(err.message)
    }
  }

  // const { totalRating, avgRating } = calculateAvgRating(reviews);
  console.log(id);
  return (
    <div className="tour__card">
    <Card >
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
          <span>Featured</span>
        </div>
        <CardBody>
        <div className="card__top d-flex align-items-center justify-content-between">
          <span className="tour__location d-flex align-items-center gap-1">
            <i className="ri-map-pin-line"></i> 
            <h4>{city}</h4>
          </span>
          <span className="tour__rating d-flex align-items-center gap-1">
            <i className="ri-star-line"></i>
            {userReview.rating === 0 ? null : userReview.rating}
            {userReview.rating === 0 ? "Not rated" : <span>{userReview.length}</span>}
          </span>
          </div>
          <h5 className="tour__title">
            <Link to={`/tours/${id}`}>{title}</Link>
            {/* Fixed interpolation of id */}
          </h5>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
          {/* <h5> */}
            {/* ${price} <span> /per person/ </span> */}
          {/* </h5> */}
          <Button className="btn booking__btn">
            <Link to={`/tours/${id}`}>Book Now</Link>
          </Button>
          </div>
        
    </CardBody>
      </Card>
      
   </div>
  );
};

export default TourCard;
