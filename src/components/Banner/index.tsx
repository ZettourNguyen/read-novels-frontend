import React from 'react'

function Banner() {
    return (
        <div className='h-[515px] bg-home-banner bg-cover flex items-center'>
            <div className="container mx-auto flex-1">
                <h1 
                    style={{
                        WebkitTextFillColor: 'transparent'
                    }}
                    className='
                    font-semibold
                    text-5xl bg-text-linear bg-clip-text
                    lg:w-[50%] sm:w-[100%]'
                >
                    Góc nhìn đa chiều của thế hệ trẻ Việt Nam
                </h1>
                <p className="text-3xl font-normal mt-7">Viết - Chia sẻ - Kết nối - Chiêm nghiệm</p>
                <p className="text-3xl font-normal mt-1">Tất cả tại Spiderum</p>

                <button className='rounded-full border py-3 px-10 mt-4  hover:bg-[#eff0da]'>
                    Đăng bài viết
                </button>
            </div>
        </div>
    )
}

export default Banner