"use client"
import Image from "next/image"
import * as motion from "motion/react-client"
import media from "../../img/media.png"
import maps from "../../img/millionsMap.png"
import { Button } from "antd"

export default function CreateBlog() {

    return (
        <div style={{ height: "80vh" , backgroundImage: `url(${maps})`}} className="">
            <header className="w-2/3 flex justify-center">
                <div className="w-1/2">
                    <p className="text-4xl text-white">
                    Tham gia cùng hàng triệu người dùng khác
                    </p>
                    <p className="text-white mt-14">
                    Dù bạn chia sẻ chuyên môn của mình, tin nổi bật hoặc một ý tưởng bạn nghĩ ra, bạn luôn có người đồng hành trên Blogger. Đăng ký để khám phá lý do tại sao hàng triệu người đăng nội dung thể hiện niềm đam mê của mình ở đây.
                    </p>
                    <Button>Tạo blog của bạn</Button>
                </div>
            </header>
        </div>
    );
}

