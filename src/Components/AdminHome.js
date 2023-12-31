import { Button, Container, Form, Alert } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginProfile } from "./Services/AdminApiService";

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
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '56vh' }}>
            <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
                <h2 className="mb-3">Admin Login</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="adminEmail" placeholder="Enter email" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="adminPassword" placeholder="Enter password" onChange={handleChange} />
                </Form.Group><br />

                <Button variant="primary" type="submit">
                    Sign in
                </Button><br /><br />
            </Form>
            {loginError ? <Alert variant="danger" className="mt-3">Invalid phone or password</Alert> : null}
        </Container>
    );
}