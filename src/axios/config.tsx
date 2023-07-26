import axios from "axios";
export const instance = axios.create({
    baseURL: 'http://localhost:3000'
})
instance.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})
instance.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    return Promise.reject(error)
})