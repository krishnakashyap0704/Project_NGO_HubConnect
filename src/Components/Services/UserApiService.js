import axios from "axios";
import { BASE_URL } from "../Constant/ConstantURL";

// api for storing user data 
export async function saveRegister(formData) {
  try {
    const response = await axios.post(BASE_URL+"register", formData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export async function LoginProfile(formData){
  const response=await axios.post(BASE_URL+"login",formData);
  return response.data;
};