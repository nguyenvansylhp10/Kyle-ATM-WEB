import { ATMResponseData } from '../interface/index';
import axiosClient from "./index";

export const getATMS = async ():Promise<ATMResponseData> => {
    const URL ='/atms';
    return axiosClient.get(URL);
}
export const postAtm = async(atmName:string) => {
    const URL = '/atms' 
    return axiosClient.post(URL,{name:atmName});
}
export const removeAtm = async (id :string) => {
    const URL = `/atms/${id}`;
    return axiosClient.delete(URL)
}