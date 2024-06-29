import React from 'react'
import deliver from '@/assets/imgs/spider-deliver.png'
function ContactForm() {
    return (
        <div className='border-[1px] border-solid border-[#e1e1e1] py-10 px-10 rounded-[4px]'>
            <div className='px-2'>
                <p className="text-xl font-bold text-gray_text">
                    CÁC BÀI VIẾT NỔI BẬT
                    BẠN KHÔNG NÊN BỎ LỠ!
                </p>
                <p className="text-base text-gray_text mt-3">
                    Thứ Năm hàng tuần, Spiderum sẽ gửi bạn email tổng hợp những bài viết đáng đọc nhất tuần qua.
                </p>
                <div className='my-5'>
                    <img src={deliver} alt="" className='mx-auto'/>
                </div>
                <div className=''>
                    <div className='flex flex-col'>
                        <label htmlFor="your-email" className='text-sm text-gray_text mb-2 w-[75%]'>
                            Chúng mình có thể gửi thư cho bạn qua: <span className='text-[red]'>*</span>
                        </label>
                        <input 
                            type="text" 
                            id='your-email' 
                            className='
                            outline-none h-[35px] indent-[10px]
                            rounded-[4px]
                            text-sm
                            focus:shadow
                            border-[1px] border-solid border-[#e1e1e1]'
                            placeholder='Email của bạn'
                            
                        />
                    </div>
                    <div className='flex flex-col mt-5'>
                        <label htmlFor="your-email" className='text-sm text-gray_text mb-2 w-[75%]'>
                            Chúng mình có thể gọi bạn là: <span className='text-[red]'>*</span>
                        </label>
                        <input 
                            placeholder='Tên của bạn'
                            type="text" 
                            id='your-email' 
                            className='
                            outline-none h-[35px] indent-[10px]
                            text-sm
                            rounded-[4px]
                            focus:shadow
                            border-[1px] border-solid border-[#e1e1e1]'
                            
                        />
                    </div>
                    <button 
                        className='w-full h-[43px] text-white bg-sky_blue mt-4 font-semibold hover:bg-sky_blue_light'
                    >
                        Đăng ký
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm