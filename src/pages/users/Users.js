import React from "react";
import "./users.css";
import { Table } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Users = () => {
  let Navigate = useNavigate();
  return (
    <div className="users">
      <h1 className="title">Users</h1>
      <div className="table">
        <div className="button-search">
          <button className="add-button" onClick={() => Navigate("/addUser")}>Add User</button>
          <input type="text" className="search" placeholder="  Search User..." />
        </div>
         
        <Table striped bordered hover responsive="xl">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Store</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Male</td>
              <td>Desserts</td>
              <td>
                <button className="edit_btn">
                  <AiFillEdit />
                </button>
                &nbsp;&nbsp;
                <button className="delete_btn">
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
  
      </div>
    </div>
  );
};

export default Users;
