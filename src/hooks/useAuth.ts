import axiosInstance from "@/api"
import { loadUserFail, loadUserSuccess, login } from "@/store/auth/auth.slice"
import { useAppDispatch } from "@/store/hooks"
import { useEffect } from "react"
import history from "@/router/history"
import actionNotification from "@/components/NotificationState/Toast"
import axios from "axios"

const useAuth = () => {
    const dispatch = useAppDispatch()
    
    useEffect(()=>{
    },[])
    
    const handlelogin = async (email: string, password: string) => {
        try {
            const response = await axiosInstance.post('/auth/login',{
                email: email,
                password: password
            })
            // console.log(response.data.accessToken)
            const data = response.data
            const accessToken = data.accessToken

            localStorage.setItem('accessToken', accessToken)
            loadUser()
            dispatch(login())
            history.push('/')
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || 'Đã xảy ra lỗi không xác định.';
                actionNotification(`${errorMessage}`, "error");
            } else {
                actionNotification(`Đăng nhập thất bại.`, "error");
            }
            dispatch(loadUserFail())
        }
    }
    const handleRegister = async (email: string, password: string) => {
        try {
            const response = await axiosInstance.post('/auth/register',{
                email: email,
                password: password
            })
            if (response.data) {
                handlelogin(email, password)
            }
        } catch (error: any) {
            actionNotification(error?.response?.data?.message, 'error')
            
        }
    }
    const loadUser = async() => {
        try {
            const res = await axiosInstance.get('/auth/getUser')
            if(res.data) {
                console.log(res.data)
                dispatch(loadUserSuccess(res.data))
            }
        } catch (error) {
            console.log(error)
            dispatch(loadUserFail())
        }
    }

    return {
        handlelogin,
        handleRegister,
        loadUser
    }
}
export default useAuth