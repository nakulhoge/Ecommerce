import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col, Carousel, Image } from 'react-bootstrap';

const Try = () => {
  return (
    <div>
    <br />
    <br />
    <br />
    
      {/* Navigation Bar */}
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://via.placeholder.com/30"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Marlee logo"
            />
            Marlee Fresh Grocery Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#furniture">Furniture</Nav.Link>
              <Nav.Link href="#monitor">Monitor</Nav.Link>
              <NavDropdown title="Vodka" id="vodka-dropdown">
                <NavDropdown.Item href="#vodka1">Vodka 1</NavDropdown.Item>
                <NavDropdown.Item href="#vodka2">Vodka 2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Desktops" id="desktops-dropdown">
                <NavDropdown.Item href="#desktop1">Desktop 1</NavDropdown.Item>
                <NavDropdown.Item href="#desktop2">Desktop 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#laptops">Laptops</Nav.Link>
              <Nav.Link href="#components">Components</Nav.Link>
              <Nav.Link href="#cameras">Cameras</Nav.Link>
              <Nav.Link href="#mp3players">MP3 Players</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav>
              <Nav.Link href="#account">My Account</Nav.Link>
              <Nav.Link href="#currency">Currency</Nav.Link>
              <Nav.Link href="#language">Language</Nav.Link>
              <Nav.Link href="#cart">Cart ($0.00)</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel */}
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=Accessory+Daily+Staples"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Accessory</h3>
            <p>DAILY STAPLES</p>
            <Button variant="primary">SHOP NOW</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=Grocery+Get+up+to+50%25+Off"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>GROCERY</h3>
            <p>GET UP TO 50% OFF</p>
            <Button variant="primary">SHOP NOW</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=Vegetable+Pistachios+NIM"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>VEGETABLE</h3>
            <p>PISTACHIOS NIM</p>
            <Button variant="primary">SHOP NOW</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

       {/* Top Categories */}
       {/* <Container className="my-4">
        <h2>Top Categories</h2>
        <div className="top-categories-carousel">
          <Button variant="outline-primary" className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </Button>
          <Row>
            <Col xs={6} md={2}>
              <Image src="https://via.placeholder.com/100x100?text=Monitor" roundedCircle />
              <p>Monitor</p>
            </Col>
            <Col xs={6} md={2}>
              <Image src="https://via.placeholder.com/100x100?text=Vodka" roundedCircle />
              <p>Vodka</p>
            </Col>
            <Col xs={6} md={2}>
              <Image src="https://via.placeholder.com/100x100?text=Desktops" roundedCircle />
              <p>Desktops</p>
            </Col>
            <Col xs={6} md={2}>
              <Image src="https://via.placeholder.com/100x100?text=Laptops" roundedCircle />
              <p>Laptops</p>
            </Col>
            <Col xs={6} md={2}>
              <Image src="https://via.placeholder.com/100x100?text=Components" roundedCircle />
              <p>Components</p>
            </Col>
            <Col xs={6} md={2}>
              <Image src="https://via.placeholder.com/100x100?text=Cameras" roundedCircle />
              <p>Cameras</p>
            </Col>
            <Col xs={6} md={2}>
              <Image src="https://via.placeholder.com/100x100?text=MP3+Players" roundedCircle />
              <p>MP3 Players</p>
            </Col>
          </Row>
          <Button variant="outline-primary" className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </Container> */} */}
    </div>
  );
};

export default Try;
