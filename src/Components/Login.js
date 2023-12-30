import { Button, Container, Form, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginProfile } from "./Services/UserApiService";

export function Login(){
    const navigate=useNavigate();
    const [formData,setFormData]=useState({phone:"",password:""});
    const [loginError,setLoginError]=useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const result= await LoginProfile(formData);
          console.log(result);
          localStorage.setItem("token",result.token);
          navigate("/");
        } catch (error) {
            setLoginError(true);
            setTimeout(() => {
                setLoginError(false);
              }, 3000);
        }
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '56vh' }}>
            <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
                <h2 className="mb-3">Login</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control type="number" name="phone" placeholder="Enter mobile number" onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter password" onChange={handleChange}/>
                </Form.Group><br/>

                <Button variant="primary" type="submit">
                    Sign in
                </Button><br/><br/>
                <h6>Don't have a account? <Link to="/register">Register Now</Link></h6>
                </Form>
            {loginError?<Alert variant="danger" className="mt-3">Invalid phone or password</Alert>:null}
        </Container>
    );
}