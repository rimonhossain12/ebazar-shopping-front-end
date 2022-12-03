import React from "react";
import { Navbar } from "flowbite-react";
import logo from "../../../images/navbar/commer-logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  console.log(logo);
  return (
    <div className="shadow-md">
      <div className="container px-12">
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src={logo}
              className="mr-3 h-6 w-full sm:h-9"
              alt="Flowbite Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
          <Link to="/">Home</Link>
            {/* <Navbar.Link href="/about">About</Navbar.Link> */}
            <Link to="/login" className="fw-bold text-capitalize fs-7">Login</Link>
            <Link to="/about" className="fw-bold text-capitalize fs-7">About</Link>
            <Link to="/contact" className="fw-bold text-capitalize fs-7">Contact</Link>
            {/* <Navbar.Link href="/navbars">Services</Navbar.Link>
            <Navbar.Link href="/navbars">Pricing</Navbar.Link>
            <Navbar.Link href="/contact">Contact</Navbar.Link> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Nav;
