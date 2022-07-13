import React from 'react'
import "./products.css"
import {Table} from "react-bootstrap"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const Products = () => {

let Navigate=useNavigate();

  return (
    <div className='products'>
    <h1 className='title'>Products</h1>
    <div className="table">
    <div className="button-search">
          <button className="add-button" onClick={() => Navigate("/addProduct")}>Add Product</button>
          <input type="text" className="search" placeholder='  Search products...'/>
            
        </div>
        <Table striped bordered hover responsive="xl">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src='' alt='img' />
              </td>
              <td>Biryani</td>
              <td>150</td>
              <td>Lunch</td>
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

export default Products