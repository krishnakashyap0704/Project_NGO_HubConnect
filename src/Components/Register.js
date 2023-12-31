import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { saveRegister } from "./Services/UserApiService";
import { useNavigate } from "react-router-dom";
import './Style/Register.css';

export function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dateOfBirth: "",
        gender: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await saveRegister(formData);
            setFormData({
                name: "",
                email: "",
                dateOfBirth: "",
                gender: "",
                contactNumber: "",
                password: "",
                confirmPassword: ""
            });
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                navigate("/login");
            }, 2000);
            console.log(result.message);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="Regdiv">
                <Row>
                    <Form onSubmit={handleSubmit} className="Registerform">
                        <div className="signup">
                            <h1>Signup</h1>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter full name" name="name" onKeyUp={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email address" name="email" onKeyUp={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" name="dateOfBirth" onKeyUp={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId='gender' className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="gender"
                                value="Male"
                                onChange={handleChange} required
                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="gender"
                                value="Female"
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter mobile number" name="phone" onKeyUp={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Create Password" name="password" onKeyUp={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" onKeyUp={handleChange} required />
                        </Form.Group>
                        <div className="buttondiv">
                        <Button className="formbutton" variant="primary" type="submit">Register</Button>
                        </div>
                    </Form>

                </Row>
                <Row className="mt-3 mb-4">
                    <Col lg={4}>
                        {isSubmitted ? <Alert variant="success">Student Registered</Alert> : null}
                    </Col>
                </Row>
            </div>
        </>
    );
}