import axios from "axios";
import { BASE_URL } from "../Constant/ConstantURL";

// api for storing user data 
export async function saveRegister(formData) {
  try {
    const response = await axios.post(`${BASE_URL}user/register`, formData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//api for login user
export async function loginProfile(formData) {
  try {
    const response = await axios.post(`${BASE_URL}user/login`, formData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//fetch all the users
export async function fetchProfile() {
  try {
    const response = await axios.get(`${BASE_URL}user/fetch/all`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//delete the users
export async function deleteProfile(id) {
  try {
    const response = await axios.delete(`${BASE_URL}user/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//update the users
export async function updateProfile(id,userData) {
  try {
    const response = await axios.put(`${BASE_URL}user/update/${id}`, userData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//fetch the users
export async function fetchProfileById(id) {
  try {
    const response = await axios.get(`${BASE_URL}user/fetchbyid/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};