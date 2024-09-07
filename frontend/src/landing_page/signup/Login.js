import React, { useState }  from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    alert(err, "Login Unsuccessful");
  const handleSuccess = (msg) =>
    alert(msg, "Login Successful");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };


  return (
    <div className="container">
        <h2 className="mt-5 text-center" style={{color:"rgb(56, 126, 209)"}}>Login Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
          <label htmlFor="email" className='form-label mt-2'>Email</label>
          <input className='form-control'
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
          </div>
          </div>
       
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
          <label htmlFor="password" className='form-label mt-2'>Password</label>
          <input  className='form-control'
            type="text"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
          </div>
          </div>
         
          <div className="row mt-3">
            <div className="col-2"></div>
            <div className="col-8">
            <button type="Submit" onSubmit={handleSubmit} class="btn btn-primary">Submit</button>
        &nbsp;&nbsp;
        <span>
          Want to logout ?<Link to="/signup">Signup</Link>
        </span>
        </div>
        </div>
        </form>
    </div>
  );
};

export default Login;
