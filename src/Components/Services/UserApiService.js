import axios from "axios";
import { BASE_URL } from "../Constant/ConstantURL";

// api for storing user data 
export async function saveRegister(formData) {
  try {
    const response = await axios.post(`${BASE_URL}register`, formData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//api for login user
export async function LoginProfile(formData) {
  try {
    const response = await axios.post(`${BASE_URL}login`, formData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//api for fetch all the users
export async function fetchProfile() {
  try {
    const response = await axios.get(`${BASE_URL}fetch`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//delete the users
export async function deleteProfile(id) {
  try {
    const response = await axios.delete(`${BASE_URL}deleteUser/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//Update the users
export async function updateProfile(id, phone, dateOfBirth, email) {
  try {
    const response = await axios.put(`${BASE_URL}update/${id}`, { phone, dateOfBirth, email });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//api for fetch the users
export async function fetchProfileById(id) {
  try {
    const response = await axios.get(`${BASE_URL}fetchbyid/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};