import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col, Carousel } from 'react-bootstrap';

const Searchbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
     <FormControl type="text" placeholder="Search" className="mr-sm-2 mt-3" value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)} />
  
    {/* <div>
      <input
        type="text"
        placeholder="search product"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div> */}
    </>
  );
};

export default Searchbar;
