import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './LandingPage.css'; // Import the CSS file for custom styles

const LandingPage = () => {
  const images = [
    "./ImagesUse/HorizontalImg1.jpg",
    "./ImagesUse/HorizontalImg2.jpg",
    "./ImagesUse/HorizontalImg3.jpg",
    "./ImagesUse/HorizontalImg4.jpg",
    "./ImagesUse/HorizontalImg5.jpg",
    "./ImagesUse/jawarfield.jpeg",
    "./ImagesUse/mango.jpg",
    "./ImagesUse/cornfield.jpg",
    "./ImagesUse/wheatfield.jpg",
    "./ImagesUse/jawarfield.jpeg",
    "./ImagesUse/mango.jpg",
    "./ImagesUse/cornfield.jpg",
    "./ImagesUse/wheatfield.jpg",
    "./ImagesUse/jawarfield.jpeg",
    "./ImagesUse/mango.jpg",
    "./ImagesUse/cornfield.jpg",
   
  ];

  const scrollContainerRef = React.useRef(null);

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 150; // Adjust the scroll amount as needed
    }
  };

  const handlePrevious = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 150; // Adjust the scroll amount as needed
    }
  };

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./ImagesUse/firstSlider.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>BEST ELECTRONICS ITEMS</h3>
            <p>THE BEST EXCLUSIVE OFFER! NOW! GET UP TO 60% OFF</p>
            <Button variant="primary">SHOP NOW</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./ImagesUse/SecondSider.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>BEST ELECTRONICS ITEMS</h3>
            <p>THE BEST EXCLUSIVE OFFER! NOW! GET UP TO 60% OFF</p>
            <Button variant="primary">SHOP NOW</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <Col >
            <img src="./ImagesUse/shop1.jpg" alt="Pistachios" />
          </Col>
          <Col>
            <img src="./ImagesUse/shop2.jpg" alt="Banana" />
          </Col>
           <Col>
            <img src="./ImagesUse/shop3.jpg" alt="Cherries" />
          </Col> 
        
        </Row>
      </Container>

      {/* Top Categories */}
      <Container>
        <div className="navigation-buttons">
          <h2>Top Categories</h2>
          <div>
          <button onClick={handlePrevious}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={handleNext}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          </div>
        </div>
        
        <div className="image-scroll-container" ref={scrollContainerRef}>
          {images.map((image, index) => (
            <div key={index} className="image-col">
              <Image src={image}  />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
