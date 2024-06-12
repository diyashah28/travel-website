import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import "../styles/Home.css";
import Searchbar from "../shared/Searchbar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured_tours/FeaturedTourList";
import MasonryImagesGallery from "../components/images-gallery/MasonryImagesGallery";
import galleryImages from "../components/images-gallery/galleryImages";
import Testimonials from "../components/Testimonials/Testimonials";
import Newsletter from "../shared/Newsletter";
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  {/* <img
                    className="hero__subtitle-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9XmorZ6MIpyL2L8rnCQ-mfOEFqkq6eT2y4sGjxdkJmg&s"
                    alt="photo"
                  /> */}
                </div>
                <h1 className="hero__title">
                  Travelling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Come join us for amazing tours all around the world. We are here to provide an enriching and luxurious travel experience curated to your needs. From Singapore's epic adventures to Bali's relaxing beaches, from London's cozy tea gardens to Tokyo's picteresque spring festivals; we are the best in the industry and we are here to serve you.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__imgbox mt-0">
             
                <video
                  src="https://videos.pexels.com/video-files/20391843/20391843-uhd_3840_2160_50fps.mp4"
                
                  controls loop
                />
              
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__imgbox mt-3">
                <video
                  src="https://videos.pexels.com/video-files/2169880/2169880-uhd_3840_2160_30fps.mp4"
                
                  controls loop
                />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__imgbox mt-5">
              <video
                  src="https://videos.pexels.com/video-files/20317587/20317587-uhd_3840_2160_30fps.mp4"
                
                  controls loop
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Searchbar />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
            <Subtitle subtitle={"What we serve"} />
              <h2 className="services__title">We offer our best services</h2>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <ServiceList />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Featured Tour Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tourtitle">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* featured tour section ends */}

      {/* experience section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With all our experience <br /> we will serve you
                </h2>
                <p>
                  We are the leading travel service in the India, and our clients are a testimony to that. Our team of over 2000 employees is very efficient and the best at their job.
                </p>
              </div>
             
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img
                  src="https://img.freepik.com/free-photo/tourist-with-thumb-up_1368-7035.jpg"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Experience section ends */}
      {/* gallery section starts */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title"> Visit our customers gallery</h2>
            </Col>
            <Col lg="12"></Col>
            <MasonryImagesGallery galleryImages={galleryImages} />
          </Row>
        </Container>
      </section>
      {/* Testimonials section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Home;
