import React from 'react'
import wideLogo from '../assets/imgs/wideLogo.png'

import Appstore from '@/assets/imgs/appstore-badge.svg'
import Chplay from '@/assets/imgs/ggplay-badge.svg'

function Footer() {
    return (
        <div className='py-10 border-t-[1px] border-t-[#e1e1e1] border-t-solid'>
            <div className="container">
                <div className='flex justify-between lg:items-center lg:flex-row xs:flex-col xs:items-start gap-y-2'>
                    <div className='flex lg:items-center lg:flex-row xs:flex-col gap-x-10 xs:items-start gap-y-2'>
                        <div className='h-[30px] w-[130px] '>
                            <img src={wideLogo} alt="" className='object-cover ' />
                        </div>
                        <div className='flex gap-x-3'>
                            <p className="text-xs text-gray_text cursor-pointer font-semibold">LIÊN HỆ</p>
                            <p className="text-xs text-gray_text cursor-pointer font-semibold">ĐIỀU KIỆN SỬ DỤNG</p>
                        </div>
                    </div>
                    <div className='flex lg:items-center gap-2 xs:flex-col xs:items-start lg:flex-row'>
                        <p className="text-xs font-light">Tải app Spiderum</p>
                        <div className='flex items-center gap-2 '>
                            <a href="#">
                                <img src={Appstore} alt="" width={135} height={41} />
                            </a>
                            <a href="#">
                                <img src={Chplay} alt="" width={135} height={41} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='py-10 border-t-[1px] border-t-[#e1e1e1] border-t-solid mt-6' >
                    <div className="flex justify-between gap-x-10 flex-wrap gap-y-4">
                        <div className='xs:w-[100%] lg:w-1/3'>
                            <p className='text-xs text-gray font-semibold'>Công ty Cổ Phần Felizz</p>
                            <p className='text-xs text-gray'>Trực thuộc Công ty Cổ Phần Spiderum Việt Nam (Spiderum Vietnam JSC)</p>
                            <p className='text-xs text-gray'>Người chịu trách nhiệm nội dung: Trần Việt Anh</p>
                            <p className='text-xs text-gray'>Giấy phép MXH số 341/GP-TTTT do Bộ TTTT cấp ngày 27 tháng 6 năm 2016</p>
                        </div>
                        <div className='xs:w-[100%] lg:w-1/4'>
                            <p className='text-xs text-gray font-semibold'>Liên hệ hợp tác</p>
                            <p className='text-xs text-gray'>Email: contact@spiderum.com</p>
                            <p className='text-xs text-gray'>Điện thoại: (+84) 977 062 149</p>
                        </div>
                        <div className='xs:w-[100%] lg:w-1/3'>
                            <p className='text-xs text-gray font-semibold'>© Copyright 2017 - 2023</p>
                            <p className='text-xs text-gray'>Email: contact@spiderum.com</p>
                            <p className='text-xs text-gray'>Điện thoại: (+84) 977 062 149</p>
                            <p className='text-xs text-gray'>
                                Tầng 11, tòa nhà HL Tower, lô A2B, phố Duy Tân, phường Dịch Vọng Hậu, Cầu Giấy, Hà Nội
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer