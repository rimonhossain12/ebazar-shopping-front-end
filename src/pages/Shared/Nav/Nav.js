import React from "react";
import { Navbar,Button } from "flowbite-react";
import logo from "../../../images/navbar/commer-logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from 'firebase/auth';

const Nav = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="shadow-md">
      <div className="container px-12">
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="https://rimon-protfolio.web.app/">
            <img
              src={logo}
              className="mr-3 h-6 w-full sm:h-9"
              alt="Flowbite Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
          <Link to="/">Home</Link>         
            <Link to="/about" className="fw-bold text-capitalize fs-7">About</Link>
            <Link to="/contact" className="fw-bold text-capitalize fs-7">Contact</Link>
            <Link to="/dashboard" className="fw-bold text-capitalize fs-7">Dashboard</Link>
            <Link to="/feature" className="fw-bold text-capitalize fs-7">Feature-product</Link>
            {
             user?.email ?  <Button gradientDuoTone="purpleToPink" onClick={logout}>
             Logout
           </Button>:   <Link to="/login" className="fw-bold text-capitalize fs-7">Login</Link>
           }
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Nav;
