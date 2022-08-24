import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
 

const Datatabel = () => {
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div> <div class="container ">
    <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
    <div class="row ">
     
     <div class="">
        <div className="search">
           <input class="form-control w-25 float-end" type="search" placeholder="Search " aria-label="Search"/>
        </div>    
        </div>  
        <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2></h2></div>
        <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
      
       </div>
     </div>  
      <div class="row">
          <div class="table-responsive " >
           <table class="table table-striped table-hover table-bordered">
              <thead>
                  <tr>
                      <th>No</th>
                      <th>First name </th>
                      <th>LastName</th>
                      <th>Phone number</th>
                      <th>Timesrap </th>
                      <th>Village</th>
                      <th>District</th>
                      <th>Province</th>
                      <th>price</th>
                      <th>Bill_id</th>
                  </tr>
              </thead>
              <tbody>
                  
                  <tr>
                      <td>1</td>
                      <td>Mr Tram</td>
                      <td>Hongvilay</td>
                      <td>02066699949949</td>
                      <td>005.66</td>
                      <td>HHH</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                  </tr>
                  <tr>
                  <td>2</td>
                      <td>Mr Tram</td>
                      <td>Hongvilay</td>
                      <td>02066699949949</td>
                      <td>005.66</td>
                      <td>HHH</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                  </tr>
                   

                  <tr>
                  <td>3</td>
                      <td>Mr Tram</td>
                      <td>Hongvilay</td>
                      <td>02066699949949</td>
                      <td>005.66</td>
                      <td>HHH</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                  </tr>

                  <tr>
                  <td>4</td>
                      <td>Mr Tram</td>
                      <td>Hongvilay</td>
                      <td>02066699949949</td>
                      <td>005.66</td>
                      <td>HHH</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                  </tr>


                  <tr>
                  <td>5</td>
                      <td>Mr Tram</td>
                      <td>Hongvilay</td>
                      <td>02066699949949</td>
                      <td>005.66</td>
                      <td>HHH</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                  </tr>


                  <tr>
                  <td>6</td>
                      <td>Mr Tram</td>
                      <td>Hongvilay</td>
                      <td>02066699949949</td>
                      <td>005.66</td>
                      <td>HHH</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                  </tr>
                  <tr>
                  <td>6</td>
                      <td>Mr Tram</td>
                      <td>Hongvilay</td>
                      <td>02066699949949</td>
                      <td>005.66</td>
                      <td>HHH</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                  </tr>
                  <tr>
                  <td>6</td>
                      <td>Mr Tram</td>
                      <td>Hongvilay</td>
                      <td>02066699949949</td>
                      <td>005.66</td>
                      <td>HHH</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                  </tr>
                  <tr>
                  <td>6</td>
                      <td>Mr Tram</td>
                      <td>Hongvilay</td>
                      <td>02066699949949</td>
                      <td>005.66</td>
                      <td>HHH</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                      <td>005.66</td>
                  </tr>

              </tbody>
          </table>
      </div>   
  </div>  

  <div className="model_box">
<Modal
 
>
  

  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    
  </Modal.Footer>
</Modal>

 </div>  
</div>    
</div> </div>
  )
}

export default Datatabel