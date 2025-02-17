"use client"
import Image from "next/image"
import * as motion from "motion/react-client"
import media from "../../img/media.png"
import giadinh from "../../img/giadinh.png"

export default function Memmories() {

    return (
        <div style={{ backgroundColor: "#bc382e", height: "80vh" }} className="w-full overflow-hidden relative flex items-center">
            <header className="w-2/3 flex justify-center">
                <div className="w-1/2">
                    <p className="text-4xl text-white">
                        Lưu giữ kỷ niệm của bạn
                    </p>
                    <p className="text-white mt-14">
                    Lưu các khoảnh khắc quan trọng. Blogger cho phép bạn lưu trữ an toàn hàng nghìn bài đăng, ảnh và nhiều nội dung khác qua Google.
                    </p>
                </div>
            </header>
            <motion.div
                id="animated-image"
                className="absolute flex justify-center z-10 bottom-3 right-[350px]"
                // variants={variants}
                initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            >
                <Image
                    src={media}
                    width={500}
                    alt="Example"
                    className="h-full object-cover rounded-lg "
                />
            </motion.div>
            <motion.div
                id="animated-image"
                className="absolute bottom-40 right-14"
                // variants={variants}
                initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            >
                <Image
                    src={giadinh}
                    width={500}
                    alt="Example"
                    className="h-full object-cover rounded-lg"
                />
            </motion.div>

        </div>
    );
}

