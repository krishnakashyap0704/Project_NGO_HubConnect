import {Form, Alert } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginProfile } from "./Services/AdminApiService";
import './Style/AdminHome.css';

export function AdminLogin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ adminEmail: "", adminPassword: "" });
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
                navigate('/adminService');
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

    return (
        <div className="A-d-flex">
            <Form onSubmit={handleSubmit} className="A-Loginform">
                <div className="A-logintitle"><h2 className="mb-3">Admin Login</h2></div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="adminEmail" placeholder="Enter email" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="adminPassword" placeholder="Enter password" onChange={handleChange} />
                </Form.Group><br />

                <div  className="A-logintitle">
                <button type="submit" className="Registerbutton">Login</button></div><br /><br />
            </Form>
            {loginError ? <Alert variant="danger" className="mt-3">Invalid phone or password</Alert> : null}
        </div>
    );
}