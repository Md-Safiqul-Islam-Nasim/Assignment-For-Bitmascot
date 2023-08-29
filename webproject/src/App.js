import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Login from './Login';
import Register from "./Signup";
import 'bootstrap/dist/css/bootstrap.min.css'
import UserProfile from "./UserProfile";
import Signup from "./Signup";
import AdminPage from './AdminPage';

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/Signup' element={<Signup/>}></Route>
                <Route path='/UserProfile' element={<UserProfile/>}></Route>
                <Route path='/AdminPage' element={<AdminPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App