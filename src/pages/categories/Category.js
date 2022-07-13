
import React from 'react'
import "./category.css"
import {Table} from "react-bootstrap"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
const Category = () => {
  return (
    <div className='categories'>
    <h1 className='title'>Categories</h1>
    <div className="table">
        <Table striped bordered hover responsive="xl">
          <thead>
            <tr>
              <th>Id</th>
              <th>Category Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Drinks</td>
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

export default Category