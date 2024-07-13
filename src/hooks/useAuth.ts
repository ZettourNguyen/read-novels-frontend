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
            console.log(response.data.accessToken)
            const data = response.data
            const accessToken = data.accessToken

            localStorage.setItem('accessToken', accessToken)
            loadUser()
            dispatch(login())
            history.push('/')
        } catch (error: any) {
            console.log(error.message)
        }
    }
    const loadUser = async() => {
        try {
            const res = await axiosInstance.get('/auth/getUser')
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