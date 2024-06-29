import axios from 'axios';

const BASE_URL = 'http://localhost:3000'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(async function (config) {
    const token = localStorage.getItem('access_token')
    if(token){
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(async function (response) {
    // token heets han 
    console.log('1112233')
    return response;
}, function (error) {
    console.log('11232214')
    if(error.response){
        console.log('errorr server: ' , error.response.data)
    }
    return Promise.reject(error);
});

export default axiosInstance;