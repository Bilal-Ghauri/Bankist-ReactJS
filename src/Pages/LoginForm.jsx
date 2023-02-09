import React, { useContext, useState } from "react";
import { Context } from "../context/UserContext";


const LoginForm = () => {
  let [userName , setUserName] = useState('Bilal Ghauri')
  let [pinCode , setPinCode] = useState('11')
  let {loginUser} = useContext(Context)
  return (
    
      <div className="row p-3  d-flex justify-content-center align-items-center vh-100" style={{backgroundColor :'#FAFAFA'}}>
        <div className="col-lg-4 border col-md-6 col-sm-6 border border shadow p-md-5 p-3 bg-white"  style={{marginBottom : '100px'}}>
          <form style={{maxWidth :"600px" }} onSubmit={(e)=> {
            e.preventDefault()
            if(userName == '' || userName.trim() == ''){
              alert("Please Enter a Valid Name")
            }else if(pinCode == null){
              alert('Please Enter Pincode');
            }else{
              loginUser(userName , pinCode)
            }
          }}>
            <h4 className="fw-bold text-center mb-3">Login</h4>
            <div className="mb-2">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={userName}
                onChange = {(e)=> {
                  setUserName(e.target.value)
                }}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                PinCode
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput2"
                value={pinCode}
                onChange = {(e)=> {
                  setPinCode(e.target.value)
                }}
              />
              <div className="w-100 text-center">
              <button type="submit" className="btn mt-4 btn-outline-primary px-5 rounded-pill">
                Login
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    
  );
};

export default LoginForm;
