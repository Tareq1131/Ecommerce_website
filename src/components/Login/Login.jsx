//import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const[error,setError] = useState('');
    const {signIn}  = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';


    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
       const password = form.password.value;
       console.log(email,password);

       signIn(email,password)
       .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        // navigate('/')
        navigate(from, {replace: true})
      })
      .catch((error) => {
       console.log(error);
       setError(error.message);
      });
    }


  return (
    <div className="form-container">
      <h2 className="form-tittle">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" required />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p><small>New to Ema-john? <Link to="/signup">Create New Account</Link></small></p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default Login;
