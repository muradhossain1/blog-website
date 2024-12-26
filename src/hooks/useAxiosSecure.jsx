import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { userLogout } = useAuth();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, async error => {
            if (error.response.status === 401 || error.response.status === 401) {
                // logout
                userLogout()
                navigate('/login')
            }
        })
    }, [userLogout, navigate])
    return axiosSecure;
};

export default useAxiosSecure;