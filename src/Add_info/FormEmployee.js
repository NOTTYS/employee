import React from 'react'
import './formemployee.css'

const FormEmployee = () => {
  return (
    <div>
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title"></h3>
              <div className="form-group mt-3">
                <label>ຊື່</label>
                <input
                
                  className="form-control mt-1"
                  
                />
              </div>
              <div className="form-group mt-3">
                <label>ນາມສະກຸນ</label>
                <input
                  
                  className="form-control mt-1" 
                />
                 </div>
              <div className="form-group mt-3">
                <label>ເບີໂທ</label>
                <input
                  
                  className="form-control mt-1"
                  
                />
                 </div>
              <div className="form-group mt-3">
                <label>ບ້ານ</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  
                />
                <select class="form-group col-md-4" id="example">

</select>
<select class="form-group col-md-4" id="example">
  <select id="Province" class="form-control"></select>

</select>
 </div>
              <div className="form-group mt-3">
                <label>ເລກໃບບີນ</label>
                <input
                  className="form-control mt-1"
                  
                />
                 </div>
              <div className="form-group col-md-2">
                <label>ລາຄາທັງໜົດ</label>
                <input
                  
                  className="form-control mt-1" 
                />
        
              </div>
              
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                ຢືນຢັນ
                </button>
              </div>
             
            </div>
          </form>
        </div></div>
  )
}

export default FormEmployee