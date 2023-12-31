import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteProfile, fetchProfile } from './Services/UserApiService'; 
import { toast } from 'react-toastify';


export const AdminService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetchProfile();
      setServices(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Error fetching data');
    }
  };

  const deleteService = async (id) => {
    try {
      console.log(`Delete user with ID ${id}`);
      const response = await deleteProfile(id);
      setServices(prevServices => prevServices.filter(service => service.id !== id));
      console.log('User deleted successfully:', response);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', color: 'navy' }}>Users List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Date Of Birth</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>{service.email}</td>
              <td>{service.gender}</td>
              <td>{service.dateOfBirth}</td>
              <td>{service.phone}</td>
              
              <td>
                <Link to={`/updateUser/${service.id}`}>
                  <button className="btn btn-success">Update</button>
                </Link>{' '}
                <button
                  onClick={() => deleteService(service.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


