"use client"
import { Button } from "antd"

export default function CreateBlog() {

    return (
        <div style={{
            background: `linear-gradient(rgba(255, 140, 0, 0.7), rgba(255, 165, 0, 0.5)), 
                     url('https://www.blogger.com/about/img/sections/millions/millions-map_2x.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh"
        }} className="flex justify-center items-center">
        
            <header className="flex justify-center">
                <div className="w-1/3 flex flex-col justify-center items-center">
                    <p className="text-4xl text-white">
                    Tham gia cùng hàng triệu người dùng khác
                    </p>
                    <p className="text-white mt-14">
                    Dù bạn chia sẻ chuyên môn của mình, tin nổi bật hoặc một ý tưởng bạn nghĩ ra, bạn luôn có người đồng hành trên Blogger. Đăng ký để khám phá lý do tại sao hàng triệu người đăng nội dung thể hiện niềm đam mê của mình ở đây.
                    </p>
                    <Button className="bg-[#2f454f] border-none hover:!bg-[#2f454f] hover:!text-orange-200 mt-6 text-white p-6 w-32">Tạo blog của bạn</Button>
                </div>
            </header>
        </div>
    );
}

