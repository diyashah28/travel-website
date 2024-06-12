import React, { useState, useContext } from 'react';
import "./Booking.css";
import { Form, FormGroup, Input, ListGroup, ListGroupItem, Button } from "reactstrap"; // Import Form, FormGroup, Input, ListGroup, ListGroupItem components from reactstrap

import {useNavigate} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';


const Booking = ({ tour, avgRating }) => {
    const { price, reviews, title } = tour;
    console.log(tour);
    console.log(tour.title);
    const navigate = useNavigate();

    const {user} = useContext(AuthContext)

    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,   
        tourName: tour.title,      
        fullName: "",
        phone: "",
        guestSize: 1,
        bookAt: ""
    });
    const totalRating = reviews ? reviews.length : 0; // Define totalRating
    console.log(tour._id);
    const handleChange = e => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }));
        // Implement your handleChange logic here
    };

    const handleClick = async e => {
        e.preventDefault();
        console.log(booking);
        try
        {
            if(!user || user===undefined || user===null )
            {
                return alert ('Please sign in')
            }
            const res = await fetch(`${BASE_URL}/booking/${tour._id}` , {
                method:'post',
                headers:{'content-type':'application/json'},
                credentials:'include',
                body:JSON.stringify({
                    userId:booking.userId,
                    userEmail:booking.userEmail,
                    tourName:title,
                    fullName:booking.fullName,
                    phone:booking.phone,
                    guestSize:booking.guestSize,
                    bookAt:booking.bookAt
                })
            })
            // setBooking(null);
            const result = await res.json()

            if(!res.ok)
            {
                return alert(result.message)
            }
             navigate("/thank-you");
        }
        catch (err)
        {
            alert(err.message)
        }
    };


    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

    return (
        <div className="booking-container">
            <div className="booking">
                {/* Booking content */}
                <div className="booking__top d-flex align-items-center justify-content-between">
                    <h3>${price} <span>/per person</span></h3>
                    <span className="tour__rating d-flex align-items-center gap-1">
                        <i
                            className="fa-solid fa-star">
                            
                        </i>
                        {/* {avgRating === 0 ? null : avgRating}{reviews?.length} */} 4
                    </span>
                </div>
                {/* Booking form */}
                <div className='booking__form'>
                    <h5>Information</h5>
                    <Form className="booking__info-form" onSubmit={handleClick} >
                        <FormGroup>
                            <Input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange} />
                        </FormGroup>
                        {/* Add more form fields here as needed */}
                        <FormGroup>
                            <Input type="email" placeholder="Email" id="userEmail" required onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="tel" placeholder="Phone Number" id="phone"  required onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="date" placeholder="Date" id="bookAt"  required onChange={handleChange} />
                        </FormGroup>
                        <FormGroup className="d-flex align-items-center gap-3">
                            <Input type="number" placeholder="Guests" id="guestSize"  required onChange={handleChange} />
                        </FormGroup>
                        {/* Add additional form fields as needed */}
                        {/* <Button className="btn primary__btn text-white" type="submit">Submit</Button> */}
                    </Form>
                </div>
                {/* Booking form end */}
                {/* Booking bottom start  */}
                <div className="booking__bottom">
                    <ListGroup>
                        <ListGroupItem className="border-0 px-0">
                            <h5 className="d-flex align-items-center gap-1">${price} <i className="ri-close-line"> </i> 1 person </h5>
                            <span> ${price}</span>
                        </ListGroupItem>
                        <ListGroupItem className="border-0 px-0">
                            <h5>Service Charge<i className="ri-close-line"> </i> 1 person </h5>
                            <span> $10</span>
                        </ListGroupItem>
                        <ListGroupItem className="border-0 px-0 total">
                            <h5>Total <i className="ri-close-line"> </i> 1 person </h5>
                            <span>{totalAmount}</span>
                        </ListGroupItem>
                    </ListGroup>
                    <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Booking