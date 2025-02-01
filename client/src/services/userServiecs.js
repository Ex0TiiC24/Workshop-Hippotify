import { axiosInstance } from "../utils/axiosInstance"

export const getUser = async () =>{
    try{
        const response = await axiosInstance.get('/user');
        return response.data.data
    }
    catch (e){
        return e.response
    }
}