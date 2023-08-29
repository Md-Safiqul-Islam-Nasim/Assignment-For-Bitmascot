import { Table } from "react-bootstrap";
import AdminHeader from "./adminheader";
import Header from "./header";
import axios from "axios";
import React, { useState, useEffect } from "react";

function AdminPage() {
  const [data, setData] = useState([]);
  function search(key) {
    if (key == "" || key == null) {
      axios
        .get("http://localhost:8000/api/userlist")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      axios
        .get("http://localhost:8000/api/search/" + key)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/userlist")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <AdminHeader />
      <h3 className="d-flex justify-content-center align-items-center">
        User List
      </h3>
      <br></br>
      <div className="mb-2">
        <input
          type="text"
          onChange={(e) => search(e.target.value)}
          placeholder="Search"
          className="form-control"
        />
      </div>
      <Table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Birthdate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.address}</td>
              <td>{item.phone_Number}</td>
              <td>{item.email}</td>
              <td>{item.birthdate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default AdminPage;

