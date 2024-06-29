import axiosInstance from "@/api"
import { loadUserFail, loadUserSuccess, login } from "@/store/auth/auth.slice"
import { useAppDispatch } from "@/store/hooks"
import { useEffect } from "react"
import history from "@/router/history"

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
            const data = response.data
            const accessToken = data.access_token
            localStorage.setItem('access_token', accessToken)
            dispatch(login())
            history.push('/')
        } catch (error: any) {
            console.log(error.message)
        }
    }
    const loadUser = async() => {
        try {
            const res = await axiosInstance.get('/user/me')
            console.log('load user: ', res.data)
            if(res.data) {
                dispatch(loadUserSuccess(res.data))
            }
        } catch (error) {
            dispatch(loadUserFail())
        }
    }

    return {
        handlelogin,
        loadUser
    }
}
export default useAuth