import React, { useRef, useState , useContext,useEffect} from "react";
import { Container, Row, Col, ListGroup, Form } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/tours";
import calculateAvgRating from "../utils/avgRating";
import "../styles/TourDetails.css";
import avatar from "../images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import useFetch from "./../hooks/useFetch";
import { BASE_URL } from './../utils/config';
import {AuthContext} from './../context/AuthContext'



const TourDetails = () => {
  const { id } = useParams();
  console.log(id);
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const {user}=useContext(AuthContext);
  //const tour = tourData.find((tour) => tour.id === id);
  //tourData?.map((tour) => (tour={tour} ))
  const {data:tour,loading,error} =useFetch(`${BASE_URL}/tours/${id}`)
  //const transformedTour = { ...tour, id: tour._id };
  // if (!tour) {
  //   // Handle the case where the tour with the specified id is not found
  //   return <div>Tour not found</div>;
  // }
 
 
   if (!tour) {
    return <div>Loading...</div>;
  }
  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;
console.log(photo);
  // const reviewid=reviews[0];
  // const[userReview, SetuserReview] = useState(false)
  // const getReview = async() => 
  // {
  //   try
  //   {
  //     const response = await fetch(`${BASE_URL}/reviews/${reviewid}`)
  //     const jsonData= await response.json();
  //     SetuserReview(jsonData);
  //   }
  //   catch(err)
  //   {
  //     console.err(err.message)
  //   }
  // }
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const options = { day: "numeric", month: "long", year: "numeric" };
  console.log(reviews);
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
 
    
    try{
       if(!user || user===undefined||user===null){
        alert('Please sign in')
       }
       const reviewObj={
        username:user?.username,
        reviewText,
        rating:tourRating

       }
       const tourReview= await fetch(`${BASE_URL}/reviews/${reviews[0]}`)
       const userReview=await res.json(tourReview.rows);
       console.log(userReview)
       
      const res=await fetch(`${BASE_URL}/reviews/${id}`,{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
      })
      const result=await res.json()
      if(!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    }
    catch(err){
         alert(err.message);
    }
  }
  
console.log(reviews)


  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour__content">
              <img src={photo} alt="" />
              <div className="tour__info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i
                      className="ri-star-line"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>{" "}
                    {avgRating === 0 ? null : avgRating}{" "}
                    {totalRating === 0 ? (
                      "Not rated"
                    ) : (
                      <span>({reviews?.length})</span>
                    )}
                  </span>
                  <span>
                    <i className="ri-map-pin-line"></i> {address}
                  </span>
                </div>
                <div className="tour__extra-details">
                  <span>
                    <i className="ri-map-pin-2-line"></i> {city}
                  </span>
                  <span>
                    <i className="ri-money-dollar-circle-line"></i> ${price} /per person
                  </span>
                  <span>
                    <i className="ri-map-pin-time-line"></i> {distance} km
                  </span>
                  <span>
                    <i className="ri-group-line"></i> {maxGroupSize} people
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={()=> setTourRating(1)}>
                        1 <i className="ri-star-s-fill"></i>
                      </span>
                      <span>
                        2 <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=> setTourRating(2)}>
                        3 <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=> setTourRating(3)}>
                        4 <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=> setTourRating(4)}>
                        5 <i className="ri-star-half-s-line"></i>
                      </span>
                    </div>
                    <div className="review__input">
                      <input type="text" ref={reviewMsgRef} placeholder="Share your thoughts" required/>
                      <button className="btn primary__btn text-white" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>
                  <ListGroup className="user__reviews">
                    {reviews?.map((review, index) => (
                      <div key={index} className="review__item">
                        <Row>
                          <Col>
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <h5>Drishya</h5>
                            
                          
                            <p>
                              {new Date("01-01-24").toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </p>
                          </div>
                          <span className="d-flex align-items-center">
                            5<i className="ri-star-s-fill"></i>
                            </span>
                          <h6>It was an amazing tour</h6>
                        </div>
                        </Col>
                        </Row>
                        <Row>
                          <Col>
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className=" d-flex align-items-center justify-content-between">
                            <h5>Diya</h5>
                            
                          
                            <p>
                              {new Date("03-05-24").toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </p>
                          </div>
                          <span className="d-flex align-items-center">
                            4<i className="ri-star-s-fill"></i>
                            </span>
                          <h6>The food was great!</h6>
                        </div>
                        </Col>
                        </Row>
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <h5>Vrutik</h5>
                            
                          
                            <p>
                              {new Date("07-23-23").toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </p>
                          </div>
                          <span className="d-flex align-items-center">
                            3<i className="ri-star-s-fill"></i>
                            </span>
                          <h6>I had a great time but the planning should be more meticulous. They took us to visit the Museum on day off.</h6>
                        </div>
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <h5>Parth</h5>
                            
                          
                            <p>
                              {new Date("01-01-24").toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </p>
                          </div>
                          <span className="d-flex align-items-center">
                            4<i className="ri-star-s-fill"></i>
                            </span>
                          <h6>Good</h6>
                        </div>
                        
                        
                      </div>
                      
                    ))}
                  </ListGroup>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4">
            {/* Place Booking component here */}
            <Booking tour={tour} avgRating={avgRating} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetails;
