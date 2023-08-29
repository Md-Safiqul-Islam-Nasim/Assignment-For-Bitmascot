import NavDropdown from "react-bootstrap/NavDropdown";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
       
        const userinfo = localStorage.getItem('user-info');

        if (userinfo) {
            const parsedUser = JSON.parse(userinfo);
            setUserInfo(parsedUser[0]); 
            console.log(userInfo);
        }
    }, []);
    function logOut() {
        localStorage.clear();
        navigate('/');
    }
  return (
    <div>
      <Navbar expand="lg" className="navbar navbar-dark bg-dark">
        <Container>
          <Navbar.Brand href="#home">Navigation</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="col-md-12 d-flex justify-content-end">
            <NavDropdown title={userInfo.first_name + " " + userInfo.last_name} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={logOut} href="#action/3.1">Log Out</NavDropdown.Item>
              
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header