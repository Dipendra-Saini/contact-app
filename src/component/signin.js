import React from "react";
import './login.css'

const Signin = () =>{

    return(
        <div className="Container">
            <div className="box">
                <h1>  SIGN IN  </h1>
                <label>
                    <b>First Name</b>
                </label><br></br>
                <input type="text" placeholder="Enter you mail/Phone no."></input><br></br>
                <label>
                    <b>Last Name</b>
                </label><br></br>
                <input type="text" placeholder="Enter you password."></input><br></br>
                <label>
                    <b>Email Id</b>
                </label><br></br>
                <input type="gmail" placeholder="Enter you mail/Phone no."></input><br></br>
                <label>
                    <b>Phone No.</b>
                </label><br></br>
                <input type="text" placeholder="Enter you password."></input><br></br>
                <label>
                    <b>User Name</b>
                </label><br></br>
                <input type="text" placeholder="Enter you mail/Phone no."></input><br></br>
                <label>
                    <b>Password</b>
                </label><br></br>
                <input type="password" placeholder="Enter you password."></input><br></br>
                <button title="Register" onClick={()=>alert("You register succesfully")}>Register</button>
                <p>--------------------OR-------------------</p>

                <h2><a href="www.google.com">Login via google</a></h2>
                <h2><a href="www.facebook.com">Login via facebook</a></h2>
            </div>
        </div>
    )
}

export default Signin