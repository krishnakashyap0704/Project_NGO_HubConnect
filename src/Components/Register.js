import { Alert, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { saveRegister } from "./Services/UserApiService";
import { useNavigate } from "react-router-dom";
import "./Style/Register.css";

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
    const [errorMessage, setErrorMessage] = useState({
        name: "",
        email: "",
        dateOfBirth: "",
        gender: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const regexPatterns = {
        name: /^[A-Za-z\s]+$/,
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        dateOfBirth: /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
        phone: /^[0-9]{10}$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
        confirmPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
    };

    const validateField = (fieldName, value) => {
        const pattern = regexPatterns[fieldName];

        // Skip validation for the gender field
        if (fieldName === 'gender') {
            return true;
        }

        if (!pattern) {
            // Handle the case where the field name is not found in regexPatterns
            console.log(`Regex pattern not found for ${fieldName}`);
            return false;
        }

        return regexPatterns[fieldName].test(value);
    };

    const getErrorMessage = (fieldName) => {
        switch (fieldName) {
            case 'dateOfBirth':
                return 'Invalid Date of Birth';
            case 'phone':
                return 'Invalid Phone Number';
            default:
                return `Invalid ${fieldName}`;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [e.target.name]: e.target.value });

        // Validate the field
        const isValid = validateField(name, value);

        // Update error messages
        setErrorMessage({
            ...errorMessage,
            [name]: isValid ? "" : getErrorMessage(name)
        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Additional validation before submitting
        for (const fieldName in formData) {
            const isValid = validateField(fieldName, formData[fieldName]);
            if (!isValid) {
                // Handle invalid input (show error, disable submit button, etc.)
                console.log(`Invalid ${fieldName}`);
                return;
            }
        }

        if (formData.password !== formData.confirmPassword) {
            // Handle password mismatch (show error, disable submit button, etc.)
            setErrorMessage(prevState => ({
                ...prevState,
                password: "Password and Confirm Password do not match",
                confirmPassword: "Password and Confirm Password do not match"
            }));
            return;
        }


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
                            <Form.Control type="text" placeholder="Enter full name" name="name" onBlur={handleChange} required />
                            {errorMessage.name && <div className="error-message">{errorMessage.name}</div>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email address" name="email" onBlur={handleChange} required />
                            {errorMessage.email && <div className="error-message">{errorMessage.email}</div>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" name="dateOfBirth" onBlur={handleChange} required />
                            {errorMessage.dateOfBirth && <div className="error-message">{errorMessage.dateOfBirth}</div>}
                        </Form.Group>

                        <Form.Group className="mb-3">
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
                            <Form.Control type="number" placeholder="Enter mobile number" name="phone" onBlur={handleChange} required />
                            {errorMessage.phone && <div className="error-message">{errorMessage.phone}</div>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Create Password" name="password" onBlur={handleChange} required />
                            {errorMessage.password && <div className="error-message">{errorMessage.password}</div>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} required />
                            {errorMessage.confirmPassword && <div className="error-message">{errorMessage.confirmPassword}</div>}
                        </Form.Group>
                        <div className="buttondiv">
                            <button type="submit" className="Registerbutton">Register</button>
                        </div>
                    </Form>
                </Row>
                <Col >
                        {isSubmitted ? <Alert variant="success">Registered Successfully</Alert> : null}
                </Col>
            </div>
        </>
    );
}