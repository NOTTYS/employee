import React from 'react'
import './even.css'


const Create_Even = () => {

  return (
    <div><div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <div className="form-group mt-3">
        <div class="form-group purple-border">
  <label for="exampleFormControlTextarea4">ກິດຈະກຳ</label>
  <textarea class="form-control shadow" id="exampleFormControlTextarea4" rows="1" placeholder=''></textarea>
</div>

        </div>
        <div className="form-group mt-3">
        <div class="form-group purple-border">
  <label for="exampleFormControlTextarea4">ລາຍລະອຽດ</label>
  <textarea class="form-control shadow " id="exampleFormControlTextarea4" rows="3"></textarea>
</div>

</div>

    
        <div className="form-group mt-3">
        <div class="form-group purple-border">
  <label for="exampleFormControlTextarea4">Massage</label>
  <textarea class="form-control shadow" id="exampleFormControlTextarea4" rows="1"></textarea>
  
  <label for="exampleFormControlTextarea4">Massage</label>
  <textarea class="form-control shadow" id="exampleFormControlTextarea4" rows="1"></textarea>
  
  <label for="exampleFormControlTextarea4">Massage</label>
  <textarea class="form-control shadow" id="exampleFormControlTextarea4" rows="1"></textarea>
</div>

        </div>
        
        <div className='d-flex justify-content-evenly my-5'>
        <button type="button m-3" class="btn btn-lg btn-danger w-25" >ຍົກເລີກ</button>
        <button type="button m-2" class="btn btn-lg btn-primary w-25" >ສ້າງ</button>
        </div>
      
      </div> 
    </form>
  </div></div>
  )
}

export default Create_Even