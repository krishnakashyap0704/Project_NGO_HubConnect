import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateProfile, fetchProfileById } from './Services/UserApiService';
import { Button, Modal } from 'react-bootstrap';
import "./Style/updateUser.css";


export const UpdateUser = () => {
  const { id } = useParams();
  const [showDialog, setShowDialog] = useState(false);
  const [userData, setUserData] = useState({
    phone: '',
    dateOfBirth: '',
    email: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProfileById(id);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Error fetching user data');
      }
    };

    fetchData(); // Call the function immediately

    // Now fetchData is defined inside the useEffect, so it doesn't need to be in the dependency array
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const openModalDialog = () => {
    setShowDialog(true);
  };
  const closeModalDialog = () => {
    setShowDialog(false);
  };

  const handleUpdate = async () => {
    try {
      const response = await updateProfile(id, userData.phone, userData.dateOfBirth, userData.email);
      console.log('User updated successfully:', response);
      toast.success('User updated successfully!');
      openModalDialog();
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Error updating user');
    }
  };

  return (
    <div className="d-flex">
      <form className="updateTitle">
        <h2 style={{ textAlign: 'center', color: 'navy' }}>Update User Details</h2>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            name="dateOfBirth"
            value={userData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="buttondiv">
          <button type="button" className="updbutton" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </form>
      <Modal show={showDialog} onHide={closeModalDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are successfully Updated !</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={closeModalDialog}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

