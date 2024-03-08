import axios from "axios";
import {setupCache} from "axios-cache-adapter";
import {config} from "@/app/config";

const cache = setupCache({
    maxAge: 15 * 60 * 1000,
})

const ApiClient = (others: any) => {
    const token = others.getState().auth.token
    //axiosInstance
    const axiosInstance = axios.create({
        baseURL: config.baseUrl,
        withCredentials: false,
        // adapter: cache.adapter,
        adapter: "",
        headers: {
            Accept: "application/json",
        }
    })

    //interceptors request
    axiosInstance.interceptors.request.use(function (config) {
        config.headers.Authorization =  `Bearer ${token}`
        console.log("TOKEN SET ===> ", !!token)
        console.log("Headers ===> ", config.headers)
        console.log("Url ===> ", config.baseURL!! + config.url)
        console.log("Request ===> ", config.data)
        return config;
    }, function (error) {
        console.log("Request Error ===> ",error.response.data)
        return Promise.reject(error);
    });

    //interceptors response
    axiosInstance.interceptors.response.use((response)=>{
        console.log("Response ===> ",response.data)
        return response
    },(error)=>{
        console.log("Response Error ===> ",error)
        return Promise.reject(error)
    })
    return axiosInstance
}


export const BaseService = {
    apiClient: ApiClient,
}