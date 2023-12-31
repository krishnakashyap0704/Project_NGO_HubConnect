import axios from "axios";
import { BASE_URL } from "../Constant/ConstantURL";



export async function fetchEvents(){
    try {
        const response=await axios.get('http://127.0.0.1:9090/events');
        return response.data;
    } catch (error) {
        console.log(error);
    }


}

export async function registerEvent(credentials){
    const response=await axios.post(`${BASE_URL}register-event`,credentials);
    return response.data;
}


export async function deleteEvent(eventId, userId){
    try {
        const response=await axios.delete(`http://127.0.0.1:9090/student/${eventId}/${userId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}