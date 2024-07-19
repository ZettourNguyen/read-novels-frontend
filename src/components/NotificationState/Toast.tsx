import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
{/* <ToastContainer /> */}
export default function actionNotification(message: string,type:string) {
    if (type=='success') {
        toast.success(message, {
            position: "top-right",
            autoClose: 2000, // Thời gian tự động đóng (ms)
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                color: '#04B10A' 
            },
        });
    }
    if (type=='warning') {
        toast.warning(message, {
            position: "top-right",
            autoClose: 2000, // Thời gian tự động đóng (ms)
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                color: '#E23F33' 
            },
        });
    }
}