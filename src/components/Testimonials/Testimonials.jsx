import React from "react";
import Slider from "react-slick";
import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slideToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
         
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        
        <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
        <p>
        I am writing to express my heartfelt appreciation for the outstanding service provided by your team during our recent Bali trip organized by Traveling Company. From the moment we booked our trip, Amit Khanvilkar has been incredibly helpful and attentive to our needs, assisting us with flights, accommodations, and various activities throughout our stay.
        </p>
          
        </div>
        <h5 className="mb-0 mt-3">Lia Franklin</h5>
        <p>Customer</p>
      </div>
      <div className="testimonial py-4 px-3">
        
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <p>
          We have a great experienced and well enjoying in our bali tour all are very well managed and timely and all pickup and drop cab drivers are good to talk and very and all the our resorts are we says wowww over all the great experience we have and well enjoyed but my special request is that please request to all resorts management to arrange pure veg and jain indian breakfast for who travelled from gujrat because we don’t have any breakfast with releated our menu otherwise all are good 
        </p>
        </div>
        <h5 className="mb-0 mt-3">John Doe</h5>
        <p>Customer</p>
      </div>
      <div className="testimonial py-4 px-3">
        
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <p>
          We had gone to Paradise resort island resort, Maldives for our honeymoon and we had a wonderful time. Flamingo travels made our booking and the speed boat arrangements.
The resort is just outstanding. Apart from the water sport activities, there are lot of other things and places to explore in the resort. The room service is excellent and the resort staff is very cordial. Flamingo staff Mr Amit Khanvilkar made sure that we have a flawless journey. Overall, it was an amazing experience.
        </p>
        </div>
        <h5 className="mb-0 mt-3">Jack Black</h5>
        <p>Customer</p>
      </div>
    </Slider>
  );
};
export default Testimonials;
