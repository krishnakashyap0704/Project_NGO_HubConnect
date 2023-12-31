import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { fetchEvents, registerEvent } from "./Services/EventService";

export const Events = () => {

    var userId = 25;
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
            <h2>Upcoming Events</h2>

            <div className="container">
                <div className="row py-4">
                    <div className="col-12">
                        <div className="page-title">
                            <h1 className="text-white px-2">
                                <strong>Events</strong>
                            </h1>
                        </div>
                    </div>
                </div>
                <Row>
                    {events.map((ev) => (
                        <Col lg={6} md={12} >
                            <div className="row py-6">
                                <div className="col-lg-6 p-2 col-6 h-100">
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={process.env.PUBLIC_URL + ev.image}
                                            style={{ height: "300px" }}
                                        />
                                        <Card.Body>
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
                                            }}>Register</Button>
                                        </Card.Body>
                                    </Card>


                                </div>
                            </div>
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

