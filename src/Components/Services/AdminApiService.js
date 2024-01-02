import axios from "axios";
import { BASE_URL } from "../Constant/ConstantURL";

//api for Admin login user
export async function LoginProfile(formData) {
    try {
      const response = await axios.post(`${BASE_URL}admin/login`, formData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };