import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { fetchEvents, registerEvent } from "./Services/EventApiService.js";

export const Events = () => {

    var userId = 51;
    const [events, setEvents] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState("");
    const [formData, setFormData] = useState({});

    const openModalDialog = () => {
        setShowDialog(true);
    };
    const closeModalDialog = () => {
        setShowDialog(false);
    };

    async function populateEventState() {
        try {
            const data = await fetchEvents();
            setEvents(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateEventState();
    }, []);

    const handleRegister = async () => {
        try {
            setFormData({ "userId": userId, "eventId": selectedEvent });
            await registerEvent(formData);
            //populateEventState();
            openModalDialog();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="container">
            <h2 style={{ textAlign: 'center', color: 'navy' , margin:"30px"}} >Upcoming Events</h2>
                <Row className="justify-content-md-center">
                    {events.map((ev) => (
                        <Col lg={3}>
                                    <Card style={{ height: "700px", width: "280px" , borderRadius:"2%", margin:"20px"}}>
                                        <Card.Img
                                            variant="top"
                                            src={process.env.PUBLIC_URL + ev.image}
                                            style={{ height: "300px", width: "248px", marginTop: "10px" }}
                                        />
                                        <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                            <Card.Title>{ev.name}</Card.Title>
                                            <Card.Text className="mb-1">Location: {ev.location}</Card.Text>
                                            <Card.Text className="mb-1">Date: {new Date(ev.datetime).toLocaleDateString()}</Card.Text>
                                            <Card.Text className="mb-1">Time: {new Date(ev.datetime).toLocaleTimeString()}</Card.Text>
                                            <Card.Text className="mb-1" >
                                                {ev.description}
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => {

                                                setSelectedEvent(ev.id);
                                                handleRegister();
                                            }}>Enroll</Button>
                                        </Card.Body>
                                    </Card>
                        </Col>
                    ))}
                </Row>

                <Modal show={showDialog} onHide={closeModalDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You are successfully Registered for the Event !</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={closeModalDialog}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    );
};

