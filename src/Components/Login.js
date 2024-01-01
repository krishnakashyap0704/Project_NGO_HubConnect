import {Form, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginProfile } from "./Services/UserApiService";
import './Style/Login.css';

export function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ phone: "", password: "" });
    const [loginError, setLoginError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await LoginProfile(formData);
            console.log(result);
            if (result.status) {
                 // Store user information in local storage
                 localStorage.setItem('isLoggedIn', true);
                 // Other user data can be stored if needed
                 // localStorage.setItem('userData', JSON.stringify(result.userData));
                navigate('/');
            }else{
                setLoginError(true);
                setTimeout(() => {
                    setLoginError(false);
                }, 3000);
            }
        } catch (error) {
           console.log(error);
        }
    }
    const handleLogout = () => {
        // Clear user information from local storage
        localStorage.removeItem('isLoggedIn');
        // Other user data can be cleared if needed
        // localStorage.removeItem('userData');
        // Redirect to login page
        navigate('/login');
    }


    return (
        <div className="d-flex" >
            {!localStorage.getItem('isLoggedIn') ? (
            <Form onSubmit={handleSubmit}  className="Loginform">
                <div className="logintitle"><h2 className="mb-3">Login</h2></div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="label">Mobile No</Form.Label>
                    <Form.Control type="number" name="phone" placeholder="Enter mobile number" onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter password" onChange={handleChange}/>
                </Form.Group><br/>
                <div  className="logintitle">
                <button type="submit" className="Registerbutton">Login</button><br /><br />
                <h6>Don't have a account? <Link to="/register">Register Now</Link></h6></div>
             </Form>
             ) : (
                // Display logout button if logged in
                <div className="logintitle">
                    <button onClick={handleLogout} className="Registerbutton">Logout</button><br /><br />
                </div>
            )}
            {loginError?<Alert variant="danger" className="mt-3">Invalid phone or password</Alert>:null}
        </div>
    );
}