import axios from 'axios'



export const http = axios.create({
    baseURL: "https://svcw-system.azurewebsites.net/api",
    // timeout: 3000
})
    ;
http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,

    }

    return config
}, (error) => {
    return Promise.reject(error);
})