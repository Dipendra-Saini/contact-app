import React from "react";
import './login.css'
// import Signin from "./signin";
import { Link } from "react-router-dom";


const Login = () =>{  

    return(
        <div className="Container">
            <div className="box">
                <h1>  LOG IN  </h1>
                <label>
                    <b>Email or Phone No.</b>
                </label><br></br>
                <input type="text" placeholder="Enter you mail/Phone no."></input><br></br>
                <label>
                    <b>Password</b>
                </label><br></br>
                <input type="password" placeholder="Enter you password."></input><br></br>

                <button><Link to='/contact-list' title="SUBMIT">Login In</Link></button>
                <h3>Don't have an account <a href="www.google.com"><Link to='/signup' title="SUBMIT">Sign In</Link></a></h3>
                <p>--------------------OR-------------------</p>

                <h2><a href="www.google.com">Login via google</a></h2>
                <h2><a href="www.facebook.com">Login via facebook</a></h2>
            </div>
        </div>
    )
}

export default Login