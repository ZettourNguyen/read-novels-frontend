import {GoSearch} from 'react-icons/go'
import wideLogo from '../assets/imgs/wideLogo.png'
import { Link } from 'react-router-dom'
function Header() {
    

  return (
    <div 
        className='py-[10px]'
        style={{
            boxShadow: 'rgb(0 0 0 / 8%) 0px 3px 8px'
        }}
    >
        <div className="md:container h-[50px] flex items-center justify-between mx-2">
            <Link to={'/'}>
            <div className='h-[40px] w-[200px] '>
                <img src={wideLogo} alt="" className='object-cover '/>
            </div>
            </Link>
            <div className='flex items-center'>
                <div className='mr-[5px] w-[40px] h-[40px] flex items-center justify-center hover:bg-gray_light cursor-pointer'>
                    <GoSearch />
                </div>
                {/* <Link to={'/'}>
                    <p className='text-base text-gray_text mr-[10px]'>Liên hệ</p>
                </Link> */}
                <Link to={'/login'}>
                    <p className='rounded-full ml-[20px] bg-sky_blue text-white p-[10px] px-[20px]'>Đăng nhập</p>
                </Link>
                {/* <Link to={'/signup'}>
                <button className="rounded-full ml-[20px] bg-sky_blue text-white p-[10px] px-[20px]">Đăng ký</button>
                </Link> */}
            </div>
        </div>
    </div>
  )
}

export default Header