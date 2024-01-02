import axios from "axios";
import { BASE_URL } from "../Constant/ConstantURL";

export async function fetchEvents(){
    try {
        const response=await axios.get(`${BASE_URL}events`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export async function registerEvent(credentials){
    try{
        const response=await axios.post(`${BASE_URL}/register/event`, credentials);
        return response.data;
    }catch(error){
        console.log(error);
    }
};

export async function deleteEvent(eventId, userId){
    try {
        const response=await axios.delete(`${BASE_URL}student/${eventId}/${userId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};