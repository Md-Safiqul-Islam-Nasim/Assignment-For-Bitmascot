import { method } from "lodash";
import React ,{useState}from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Login from "./Login";
function Signup(){
    const [first_name , setfirst_Name] = useState("")
    const [last_name , setlast_Name] = useState("")
    const [address , setaddress] = useState("")
    const [phone_Number , setphone_Number] = useState("")
    const [email , setemail] = useState("")
    const [birthdate , setbirthdate] = useState("")
    const [password , setpassword] = useState("")
    async function signup(){
        let item = {first_name , last_name , address , phone_Number , email , birthdate , password}
        console.warn(item);
        try {
            const check = await axios.post('http://localhost:8000/api/checkemailunique', { email });
            console.warn(check.data.unique);
            if(check.data.unique == false){
                return;
            }
          } catch (error) {
            console.error('Error checking email uniqueness:', error);
          }
            
        const response = await axios.post('http://localhost:8000/api/registerUser', item);
        console.log('User registered:', response.data);
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return(
        <div className="register template d-flex justify-content-center align-items-center 50-w vh-100 bg-info">
            <div className="40-w p-5 rounded bg-white">
            
                <form action ="" onSubmit={handleSubmit}>
                    <h3 className="text-center col-lg-12 mb-4 ">Registration Panel</h3>

                    <div className="md-1 d-flex">
                        <div htmlFor="f_name"> First Name :  </div>
                        <div><input type="text" value={first_name} onChange={(e)=> setfirst_Name(e.target.value)} placeholder="" className="form-control"/></div>
                    </div>
                    <div className="md-1 d-flex">
                        <div htmlFor="l_name"> Last Name :  </div>
                        <div><input type="text" value={last_name} onChange={(e)=> setlast_Name(e.target.value)} placeholder="" className="form-control"/></div>
                    </div>
        
                    <div className="md-1 d-flex">
                        <div htmlFor="address"> Address :  </div>
                        <div><input type="text" value={address} onChange={(e)=> setaddress(e.target.value)} placeholder="" className="form-control"/></div>
                    </div>
                    <div className="md-1 d-flex">
                        <div htmlFor="phone"> Phone :  </div>
                        <div><input type="text" value={phone_Number} onChange={(e)=> setphone_Number(e.target.value)} placeholder="" className="form-control"/></div>
                    </div>
                    <div className="md-1 d-flex">
                        <div htmlFor="email"> Email :  </div>
                        <div><input type="email" value={email} onChange={(e)=> setemail(e.target.value)} placeholder="" className="form-control"/></div>
                    </div>
                  
                    <div className="md-1 d-flex">
                        <div htmlFor="birthday"> Birthdate :  </div>
                        <div><input type="date" value={birthdate} onChange={(e)=> setbirthdate(e.target.value)} placeholder="" className="form-control"/></div>
                    </div>
                    <div className="md-1 d-flex">
                        <div htmlFor="password"> Password :  </div>
                        <div><input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder="" className="form-control"/></div>
                    </div>
                    <div className="mb-1">
                        <Link to = '/userprofile' onClick={signup} className="btn btn-primary btn-sm m-lg-5">Register</Link>
                 
                        <Link to = "/" className="m-lg-5 btn btn-primary btn-sm">Cancel</Link>
                       
                        
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Signup