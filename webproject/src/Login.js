import React, { useEffect, useState } from "react";
import { useNavigate , Link} from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";

function Login(){
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [valid, setisvalid] = useState("true")

    const navigate = useNavigate();
    
    async function login(){
        console.warn(email,password);
        let item = {email , password};
        if (email == "admin@localhost.local")
        {
            const responseAdmin = await axios.post('http://localhost:8000/api/adminlogin', item);
            console.log(responseAdmin.data.isValid);
            if (!responseAdmin.data.isValid) {
                setisvalid(false);
                return;
            }
            else {
                setisvalid(true);
                localStorage.setItem("user-info", JSON.stringify(responseAdmin.data));
                navigate('/adminpage');
            }
        }
        else 
        {
            const response = await axios.post('http://localhost:8000/api/login', item);
            console.log(response.data.isValid);
            if (!response.data.isValid) {
                setisvalid(false);
                return;
            }
            else {
               
                setisvalid(true);
                localStorage.setItem("user-info", JSON.stringify(response.data));
                navigate('/UserProfile');
            }
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return(
        <div className="login template d-flex justify-content-center align-items-center 50-w vh-100 bg-info">
            <div className="40-w p-5 rounded bg-white">
                <form action ="" onSubmit={handleSubmit}>
                    <h3 className="text-center col-lg-12 mb-4 ">Login Panel</h3>
                    <div className="mb-2">
                        <label htmlFor="email" className="text-center col-lg-12 "> Email Address </label>
                        <input type="email" value={email} onChange={(e)=> setemail(e.target.value)} placeholder="" className="form-control"/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="password" className="text-center col-lg-12 "> Password</label>
                        <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder="" className="form-control"/>
                    </div>
                    {!valid && (
                            <p className="text-danger">Invalid email or password.</p>
                        )}
                    <div className="mb-1">
                        <button onClick ={login} className="btn btn-primary btn-sm m-lg-5">Login</button>
                        <button className="m-lg-5 btn btn-primary btn-sm">Clear</button>
                    </div>
                    <p className="text-end">
                        Are you new here?
                        <Link to ="/Signup" className="ms-2">Register Now</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login