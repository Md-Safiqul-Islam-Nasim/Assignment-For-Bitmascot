import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Header from "./header";
function UserProfile() {

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const storedUserInfo = localStorage.getItem("user-info");

    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUserInfo(parsedUserInfo[0]);
    }
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Header/>
      <h3 className="d-flex justify-content-center align-items-center">
        User Profile
      </h3>
      <br></br>
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <form className=" justify-content-center mb-3">
            <div className="mb-3 d-flex">
              <div htmlFor="f_name" style={{fontWeight:"bold"}}> First Name : </div>
              <p className="d-flex ">{userInfo.first_name}</p>
            </div>
            <div className="mb-3 d-flex">
              <div htmlFor="l_name" style={{fontWeight:"bold"}}> Last Name : </div>
              <p className="d-flex"> {userInfo.last_name}</p>
            </div>

            <div className="mb-3 d-flex">
              <div htmlFor="address" style={{fontWeight:"bold"}}> Address : </div>
              <p className="d-flex mb-3">{userInfo.address}</p>
            </div>
            <div className="mb-3 d-flex">
              <div htmlFor="phone" style={{fontWeight:"bold"}}> Phone : </div>
              <p className="d-flex ">{userInfo.phone_Number}</p>
            </div>
            <div className="mb-3 d-flex">
              <div htmlFor="email" style={{fontWeight:"bold"}}> Email : </div>
              <p className="d-flex ">{userInfo.email}</p>
            </div>

            <div className="mb-3 d-flex">
              <div htmlFor="birthday" style={{fontWeight:"bold"}}> Birthdate : </div>
              <p className="d-flex">{userInfo.birthdate}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
