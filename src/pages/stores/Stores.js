import React from 'react'
import "./stores.css"
import {Table} from "react-bootstrap"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
const Stores = () => {
  let Navigate = useNavigate();

  return (
    <div className='stores'>
    <h1 className='title'>Stores</h1>
    <div className="table">
    <div className="button-search">
          <button className="add-button" onClick={() => Navigate("/addStore")}>Add Store</button>
          <input type="text" className="search" placeholder='  Search Stores...'/>
        </div>
        <Table striped bordered hover responsive="xl">
          <thead>
            <tr>
              <th>Id</th>
              <th>Store Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Cafe</td>
              <td>Active</td>
              <td>
                <button className="edit_btn">
                  <AiFillEdit/>
                </button>
                  &nbsp;&nbsp;
                <button className="delete_btn">
                  <AiFillDelete/>
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      </div>
  )
}

export default Stores