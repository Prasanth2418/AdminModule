import React from 'react'
import "./products.css"

const AddProduct = () => {
  return (
    <div>
    <div className='card addproduct23'>
      <h5>ADD PRODUCTS FORM</h5>
      <hr/>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Product Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Name"/>
   
  </div>
  <br/>
  <div class="form-row">
    <div class="col">
    <label for="exampleInputEmail1">Catagory</label>
      <input type="text" class="form-control" placeholder="Catagory"/>
    </div>
    <div class="col">
    <label for="exampleInputEmail1">Currency</label>
      <input type="text" class="form-control" placeholder="Currency"/>
    </div>

  </div>
  <br/><br/>
  <div class="form-row">
    <div class="col">
    <label for="exampleInputEmail1">Quantity</label>
      <input type="text" class="form-control" placeholder="Quantity"/>
    </div>
    <div class="col">
    <label for="exampleInputEmail1">Price</label>
      <input type="text" class="form-control" placeholder="Price"/>
    </div>

  </div><br/><br/>
  <div class="form-group">
  <label for="comment">Description</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
</div>
  <br/><br/>
  <div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile" />
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>
 
</form>
    </div>
    
<div className='card product23'>
  <h5>PRODUCT</h5>
  <hr/>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePGR8ceYiyCO-6kZgsSlRq2RkHftd8nsDSKMBRhCLwjqSyRArKab6_os2r4wQfSS1EDo&usqp=CAU' className='productImg'/>
</div>
    </div>
  )
}

export default AddProduct