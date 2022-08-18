import React from 'react'
import './login.css'
const Login = () => {
  return (
<div>
   <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
            <h3 className="Auth-form-title">ຍິນ​ດີ​ຕ້ອນ​ຮັບ SBS ການ​ຄ້າ​ການ​ບໍ​ລິ​ການ​ເຂົ້າ​ສູ່​ລະ​ບົບ​</h3>
              <div className="form-group mt-3">
              <label>ຜູ້ໃໍຊ້</label>
          <input
            type="User name"
            className="form-control mt-1"
            placeholder="Enter your user name"/>
              </div>
              <div className="form-group mt-3">
              <label>ລະຫັດ</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter your user passwod"/>
                 
              </div>
              
              <div className="d-grid gap-2 mt-5">
                <button type="submit" className="btn btn-primary">
                ເຂົ້າສູລະບົບ
                </button>
              </div>
             
            </div>
          </form>
        </div>


</div>


  )
}

export default Login