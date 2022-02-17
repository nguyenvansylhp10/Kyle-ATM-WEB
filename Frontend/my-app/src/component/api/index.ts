import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
}


const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
 
})
axiosClient.interceptors.request.use(function (config:AxiosRequestConfig) {
    config.headers={
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
axiosClient.interceptors.response.use((res:AxiosResponse) => {
    return res.data;
  },(error:AxiosError) => {
      return Promise.reject(error);
  })
 
  export default axiosClient;