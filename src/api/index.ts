import axios from 'axios';

const BASE_URL = 'http://localhost:3001'
// http://localhost:3001/auth/login
const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(async function (config) {
    const token = localStorage.getItem('accessToken')
    if(token){
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(async function (response) {
    return response;
}, function (error) {
    if(error.response){
        console.log('errorr server: ' , error.response.data)
    }
    return Promise.reject(error);
});

export default axiosInstance;